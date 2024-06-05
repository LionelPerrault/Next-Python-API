from http.client import HTTPException
from flask import Blueprint, jsonify, request
from datetime import datetime, timedelta
from common.db import db
from . import stripe

payment_blueprint = Blueprint("payment", __name__)


@payment_blueprint.route("/create-checkout-session", methods=["POST"])
def create_checkout_session():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid request"}), 400
        if "priceId" not in data:
            return jsonify({"error": "Invalid request"}), 400
        price_id = data["priceId"]
        session = stripe.checkout.Session.create(
            payment_method_types=["card","cashapp"],
            line_items=[
                {
                    "price_data": {
                        "product_data": {
                            "name": "Donation",
                            "description": "Donation to support the organizations",
                            "metadata": {
                                "foundation": data.get("foundation", "AVA Foundation")
                            },
                        },
                        "currency": "USD",
                        "unit_amount": price_id * 100,
                    },
                    "quantity": 1,
                },
            ],
            mode="payment",
            success_url="http://localhost:3000/donate",
            cancel_url="http://localhost:3000/donate",
        )
        db.transactions.insert_one(
            {
                "name": data.get("name", ""),
                "email": data.get("email", ""),
                "transaction_id": session["id"],
                "amount": price_id,
                "foundation": data.get("foundation", "AVA Foundation"),
                "status": "pending",
                "created_at": datetime.now(),
            }
        )
        return jsonify({"url": session["url"]}), 200
    except HTTPException as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

@payment_blueprint.route("/paypal", methods=["POST"])
def create_paypal_checkout_session():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid request"}), 400
        if data["event_type"] == "CHECKOUT.ORDER.COMPLETED":
            data = data['resource']
            db.transactions.insert_one(
                {
                    "name": data['payer']['name'].get("given_name", ""),
                    "email": data['payer'].get("email_addess", ""),
                    "transaction_id": data["id"],
                    "amount": int(data["gross_amount"]["value"]),
                    "foundation": data.get("foundation", "AVA Foundation"),
                    "status": "completed",
                    "created_at": datetime.now(),
                }
            )
        return jsonify({"message": "success"}), 200
    except HTTPException as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

@payment_blueprint.route("/transactions", methods=["GET"])
def get_transactions():
    try:
        transactions = list(db.transactions.find({},{"_id":0}))
        return jsonify(transactions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@payment_blueprint.route("/webhook", methods=["POST"])
def stripe_webhook():
    payload = request.get_data(as_text=True)
    sig_header = request.headers.get("Stripe-Signature")
    try:
        event = stripe.Webhook.construct_event(
            payload,
            sig_header,
            "whsec_bf29952d73135f4823d197840e1b6f61cba0a667886eb915f04818a3edb8bc9a",
        )
    except ValueError:
        return jsonify("Invalid payload"), 400
    except stripe.error.SignatureVerificationError:
        return jsonify("Invalid signature"), 400
    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        db.transactions.update_one(
            {
                "transaction_id": session["id"],
            },
            {
                "$set": {
                    "name": session["customer_details"]["name"],
                    "email": session["customer_details"]["email"],
                    "status": "completed",
                }
            },
        )
    return jsonify("Success"), 200


@payment_blueprint.route("/ava-fees", methods=["GET"])
def get_ava_fees():
    try:
        fees = db.transactions.aggregate(
            [{"$group": {"_id": None, "total_amount": {"$sum": "$amount"}}}]
        )
        ava_fees = list(fees)[0]["total_amount"]
        total_users = db.users.count_documents({})
        return jsonify({"ava_fees": ava_fees, "total_users": total_users}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@payment_blueprint.route("/graph/<duration>", methods=["GET"])
def graph(duration):
    try:
        gap = 23 if duration == "day" else 7 if duration == "week" else 30
        date_format = (
            "%I %p" if duration == "day" else "%A" if duration == "week" else "%Y-%m-%d"
        )
        end_date = datetime.now().replace(
            hour=0, minute=0, second=0, microsecond=0
        ) + timedelta(days=1)

        start_date = end_date - (
            timedelta(hours=gap) if duration == "day" else timedelta(days=gap)
        )
        report = {
            (
                start_date
                + (timedelta(hours=i) if duration == "day" else timedelta(days=i))
            ).strftime(date_format): 0
            for i in range(gap + 1)
        }

        transactions = db.transactions.find(
            {"created_at": {"$gte": start_date, "$lte": end_date}}
        ).sort("created_at", -1)

        for transaction in transactions:
            time = transaction["created_at"].strftime(date_format)
            if time in report:
                report[time] += 1
            else:
                report[time] = 1

        return jsonify(
            {"categories": list(report.keys()), "values": list(report.values())}
        )

    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

from flask import Blueprint, jsonify, request
from datetime import datetime
from common.db import db
from . import qa,twilio_client

gpt_blueprint = Blueprint("gpt", __name__)


@gpt_blueprint.route("/chat", methods=["POST"])
def chat():
    try:
        current_time = datetime.now()
        data = request.get_json()
        userid = data.get("id")
        query = data.get("query")
        if not query or not userid:
            return jsonify("Query is required"), 400

        result = qa.invoke(query)
        message = result["answer"]

        db.chats.insert_many(
            [
                {
                    "sender": userid,
                    "receiver": "gpt",
                    "message": query,
                    "created_at": current_time,
                    "read_by": [userid],
                },
                {
                    "sender": "gpt",
                    "receiver": userid,
                    "message": message,
                    "created_at": datetime.now(),
                    "read_by": [userid],
                },
            ]
        )
        return jsonify(
            {
                "sender": "gpt",
                "receiver": userid,
                "message": message,
                "created_at": datetime.now(),
                "read_by": [userid],
            }
        ), 200
    except Exception as e:
        print(e)
        return jsonify("An error occurred"), 500


@gpt_blueprint.route("/get-chats", methods=["GET"])
def get_chats():
    try:
        userid = request.args.get("id")
        chats = list(
            db.chats.find(
                {
                    "$or": [
                        {"sender": userid, "receiver": "gpt"},
                        {"sender": "gpt", "receiver": userid},
                    ]
                },
                {"_id": 0},
            )
        )
        return jsonify(chats), 200
    except Exception as e:
        print(e)
        return jsonify("An error occurred"), 500


@gpt_blueprint.route("/update-read", methods=["PUT"])
def update_read():
    try:
        data = request.get_json()
        adminid = data.get("id")
        userid = data.get("userid")
        db.chats.update_many(
            {
                "$or": [
                    {"sender": userid, "receiver": "gpt"},
                    {"sender": "gpt", "receiver": userid},
                ]
            },
            {"$addToSet": {"read_by": adminid}},
        )
        return jsonify("Read updated"), 200
    except Exception as e:
        print(e)
        return jsonify("An error occurred"), 500
    
@gpt_blueprint.route("/sms", methods=["POST"])
def sms():
    try:
        current_time = datetime.now()
        data = request.form
        data_dict = data.to_dict()
        query = data_dict.get("Body")
        user_number = data_dict.get("From")
        result = qa.invoke(query)
        message = result["answer"]
        twilio_client.messages.create(
                     body=message,
                     from_='+17163375144',
                     to=user_number
                 )
        db.chats.insert_many(
            [
                {
                    "sender": user_number,
                    "receiver": "gpt",
                    "message": query,
                    "created_at": current_time,
                    "read_by": [user_number],
                },
                {
                    "sender": "gpt",
                    "receiver": user_number,
                    "message": message,
                    "created_at": datetime.now(),
                    "read_by": [user_number],
                },
            ]
        )
        return jsonify("Successfull"), 200
    except Exception as e:
        print(e)
        return jsonify("An error occurred"), 500

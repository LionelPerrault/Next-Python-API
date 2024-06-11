from bson import ObjectId
from flask import Blueprint, jsonify, request
from common.db import db

users_blueprint = Blueprint("users", __name__)


@users_blueprint.route("/get", methods=["GET"])
def get_user():
    try:
        user_id = request.args.get("id")
        if not user_id:
            return jsonify({"error": "Unauthorized"}), 401
        user = db.users.find_one({"_id": ObjectId(user_id)})
        if not user:
            return jsonify({"error": "Unauthorized"}), 401
        user["_id"] = str(user["_id"])
        return jsonify(user), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500


@users_blueprint.route("/get-all", methods=["GET"])
def get_all_users():
    try:
        user_id = request.headers.get("Authorization")
        if not user_id:
            return jsonify({"error": "Unauthorized"}), 401
        user = db.users.find_one({"_id": ObjectId(user_id)})
        if not user:
            return jsonify({"error": "Unauthorized"}), 401

        users = list(db.users.find({"role": "user"}))
        for user in users:
            user["_id"] = str(user["_id"])
            user["chats"] = db.chats.count_documents({"sender": user["_id"]})
        return jsonify(users), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

def convert_objectid(data):
    if isinstance(data, list):
        return [convert_objectid(item) for item in data]
    elif isinstance(data, dict):
        return {key: convert_objectid(value) for key, value in data.items()}
    elif isinstance(data, ObjectId):
        return str(data)
    else:
        return data
    
@users_blueprint.route("/cards", methods=["GET"])
def cards():
    try:
        user_id = request.headers.get("Authorization")
        users = list(db.users.find({"role": "user"}))
        valid_users = []
        # print("length >>", len(users))
        for user in users:
            user["_id"] = str(user["_id"])
            latest_chat = db.chats.find_one(
                {"sender": user["_id"], "receiver": "gpt"}, sort=[("created_at", -1)]
            )
            # print("latest_chat >>", latest_chat)

            if not latest_chat:
                continue
            user["time"] = latest_chat["created_at"]
            user["type"] = 4 if ObjectId(user_id) in latest_chat.get("read_by", []) else 1
            valid_users.append(user)

        # print(valid_users)

        valid_users = convert_objectid(valid_users)
        return jsonify(valid_users), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500
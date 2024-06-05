from http.client import HTTPException
from flask import Blueprint, jsonify, request
from datetime import datetime
from common.db import db
from . import bcrypt

auth_blueprint = Blueprint("auth", __name__)


@auth_blueprint.route("/signup", methods=["POST"])
def signup():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        name = data.get("name")
        role = data.get("role")
        location = data.get("location")
        number = data.get("number")
        age = data.get("age")

        if not email or not password or not name:
            return jsonify({"error": "All fields are required"}), 400
        user = db.users.find_one({"email": email})
        if user:
            return jsonify({"error": "User already exists"}), 400

        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
        db.users.insert_one(
            {
                "email": email,
                "password": hashed_password,
                "name": name,
                "role": role,
                "location": location,
                "number": number,
                "age": age,
                "created_at": datetime.now(),
                "updated_at": datetime.now(),
            }
        )
        return jsonify({"message": "User signed up successfully"}), 201
    except Exception:
        return jsonify({"error": "Internal server error"}), 500


@auth_blueprint.route("/signin", methods=["POST"])
def signin():
    try:
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        if not email or not password:
            return HTTPException(
                status_code=400, detail="Email and password are required"
            )
        user = db.users.find_one({"email": email})
        if not user:
            return jsonify({"error": "User not found"}), 404
        if not bcrypt.check_password_hash(user["password"], password):
            return jsonify({"error": "Invalid password"}), 401
        db.users.update_one({"email": email}, {"$set": {"updated_at": datetime.now()}})
        user["_id"] = str(user["_id"])
        return jsonify(user), 200
    except Exception:
        return jsonify({"error": "Internal server error"}), 500

@auth_blueprint.route("/reset-password", methods=["PUT"])
def reset_password():
    try:
        data = request.get_json()
        email = data.get("email")
        old_password = data.get("currentPassword")
        new_password = data.get("newPassword")
        if not email or not old_password or not new_password:
            return jsonify({"error": "All fields are required"}), 400
        user = db.users.find_one({"email": email})
        if not user:
            return jsonify({"error": "User not found"}), 404
        if not bcrypt.check_password_hash(user["password"], old_password):
            return jsonify({"error": "Invalid password"}), 401
        if old_password == new_password:
            return jsonify({"error": "New password cannot be the same as old password"}), 400
        hashed_password = bcrypt.generate_password_hash(new_password).decode("utf-8")
        db.users.update_one(
            {"email": email}, {"$set": {"password": hashed_password}}
        )
        return jsonify({"message": "Password reset successfully"}), 200
    except Exception:
        return jsonify({"error": "Internal server error"}), 500
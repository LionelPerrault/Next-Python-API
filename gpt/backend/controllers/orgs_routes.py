from flask import Blueprint, request, jsonify, make_response
from bson.objectid import ObjectId
from common.db import db

organizations_collection = db['organizations']

orgs_blueprint = Blueprint("orgs_blueprint", __name__)

# Create a new organization
@orgs_blueprint.route('', methods=['POST'])
def add_organization():
    data = request.get_json()
    result = organizations_collection.insert_one(data)
    response = jsonify(str(result.inserted_id)), 201
    response[0].headers['Access-Control-Allow-Origin'] = '*'
    return response

# Get all organizations
@orgs_blueprint.route('', methods=['GET'])
def get_organizations():
    organizations = list(organizations_collection.find())
    for organization in organizations:
        organization['_id'] = str(organization['_id'])
    response = jsonify(organizations), 200
    response[0].headers['Access-Control-Allow-Origin'] = '*'
    return response

# Get a specific organization
@orgs_blueprint.route('/<id>', methods=['GET'])
def get_organization(id):
    organization = organizations_collection.find_one({'_id': ObjectId(id)})
    if organization:
        organization['_id'] = str(organization['_id'])
        response = jsonify(organization), 200
    else:
        response = jsonify({'error': 'Organization not found'}), 404
    response[0].headers['Access-Control-Allow-Origin'] = '*'
    return response

# Update an organization
@orgs_blueprint.route('/<id>', methods=['PUT'])
def update_organization(id):
    data = request.get_json()
    result = organizations_collection.update_one({'_id': ObjectId(id)}, {'$set': data})
    if result.matched_count:
        response = jsonify({'msg': 'Organization updated'}), 200
    else:
        response = jsonify({'error': 'Organization not found'}), 404
    response[0].headers['Access-Control-Allow-Origin'] = '*'
    return response

# Delete an organization
@orgs_blueprint.route('/<id>', methods=['DELETE'])
def delete_organization(id):
    result = organizations_collection.delete_one({'_id': ObjectId(id)})
    if result.deleted_count:
        response = jsonify({'msg': 'Organization deleted'}), 200
    else:
        response = jsonify({'error': 'Organization not found'}), 404
    response[0].headers['Access-Control-Allow-Origin'] = '*'
    return response

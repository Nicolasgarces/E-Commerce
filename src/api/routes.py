"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, create_access_token, JWTManager, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # print(email + password)
   

    user = User.query.filter_by(email=email).first()
    print(user)

    ## User does not exist
    if user is None:
        return jsonify({"msg": "User does not exist"}), 404

    # # Validate
    if email != user.email or current_app.bcrypt.check_password_hash(user.password,password) != True:
         return jsonify({"msg": "Bad username or password"}), 401


    # Create Token
    access_token = create_access_token(identity=email)

    return jsonify({"access_token": access_token}), 200
    

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/user/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()

    if current_user == user.email:
        return jsonify(user.serialize()), 200


    return jsonify(logged_in_as=current_user), 400

@api.route('/user', methods=["POST"])
def create_account():
    body = request.get_json()
    passw = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    
    newUser = User(email= body["email"],name = body["name"], password = passw, lastName = body["lastName"])
    db.session.add(newUser)
    db.session.commit()

    response_body = {
        "msg": "User added successfuly "
    }
    
    return jsonify(response_body), 200



@api.route('/car', methods=["POST"])
def add_car():
    body = request.get_json()
    print(body)
    # passw = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    
    # newUser = User(email= body["email"],name = body["name"], password = passw, lastName = body["lastName"])
    # db.session.add(newUser)
    # db.session.commit()

    response_body = {
        "msg": "User added successfuly "
    }
    
    return jsonify(response_body), 200
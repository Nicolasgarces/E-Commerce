"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Address
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
    print(user.id)

    ## User does not exist
    if user is None:
        return jsonify({"msg": "User does not exist"}), 404

    # # Validate
    if email != user.email or current_app.bcrypt.check_password_hash(user.password,password) != True:
         return jsonify({"msg": "Bad username or password"}), 401


    # Create Token
    access_token = create_access_token(email,user.id)

    return jsonify({"access_token": access_token}), 200
    

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/user/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    print(current_user)
    user = User.query.filter_by(email=current_user).first()
    
    if current_user == user.email:
        response_body = {
        #"address": user.address,
        "name": user.name,
        "lastName": user.lastName,
        "email": user.email
    }
        return jsonify(response_body), 200


    return jsonify(logged_in_as=current_user), 400

@api.route('/user', methods=["POST"])
def create_account():
    body = request.get_json()
    newUserId = insertUser(body)
    userAddress = insertAddress(newUserId, body["address"])
    print(userAddress)
   # insertUserAddress(newUserId,userAddress)
    response_body = {
        "msg": "User added successfuly "
    }
    
    return jsonify(response_body), 200

def insertUser(body):
    passw = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    newUser = User(email= body["email"],name = body["name"], password = passw, lastName = body["lastName"])
    db.session.add(newUser)
    db.session.commit()
    response_body = {
        "id": newUser.id
    }
    return response_body["id"]
    


@api.route('/user/update', methods=["PUT"])
@jwt_required()
def update_user():
    body = request.get_json()
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    user.email = body["email"]
    user.name = body["name"]
    user.lastName = body["lastName"]
    db.session.add(user)
    db.session.commit()

    response_body = {
        "msg": "User modified successfuly "
    }
    
    return jsonify(response_body), 200
    
#Agregar Direccion de usuario
def insertAddress(idUser, address):
    newAddress = Address(address1= address, user_id = idUser)
    db.session.add(newAddress)
    db.session.commit()
    return newAddress.addressID

def insertUserAddress(userId, addressId):
    print(addressId)
    user = User.query.filter_by(id=userId).first()
    user.address = int(addressId)
    db.session.commit()
    return 200

#@api.route('/user/updateAddress', methods=["POST"])
#def update_user_address(address,id):
    

#Modificar direccion de usuario

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

"""
Define the REST verbs for endpoints related to the User
"""
from flask_cors import cross_origin
from flask.helpers import make_response
from flask.views import MethodView
from flask import json, jsonify, request
import jwt
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from webargs.flaskparser import abort, parser

from api.src.repositories.user import UserRepo
from api.src.models.user import UserModel, UserSchema, BlacklistToken
from api.src.views.patient import PatientAPI


class RegisterAPI(MethodView):
    """ Resources for registering Users"""

    @staticmethod 
    @UserRepo.token_required("ADMIN", "ROOT")
    @parser.use_kwargs(UserSchema, location="json_or_form") 
    def post(email, password, roles):
        """
        Create User using all of the incoming information.
        Make sure user doesn't exist already. 
        """
        print("INCOMING ROLES:", roles)
        try:
            user = UserRepo.get_by_email(email)
            response = {
                'Status': 'Fail',
                'Message': 'User with email ' + user.email +' already exists!'
            }
            return make_response(jsonify(response)), 202
        except ValidationError: 
            user = UserRepo.create(email=email, password=password, roles=roles)
            response = {
                        'Status': 'Success',
                        'Message': 'User created with email: ' + user.email +
                        ' and User ID: ' + str(user.id)
            }
            return make_response(jsonify(response)), 201
            


class LoginAPI(MethodView):
    """ Resources for Logging In"""

    @staticmethod
    @parser.use_kwargs(UserSchema, location="json_or_form")
    def post(email, password):
        """Validate User Login Information & Generate JWT Token"""

        try:
            user = UserRepo.get_by_email(email)
            UserRepo.validate_password(user, password)
            auth_token = user.encode_auth_token(user.id)
            if auth_token:
                response = {
                    'Status': 'Success',
                    'Message': 'Logged in!',
                    'auth_token': auth_token
                }
                return make_response(jsonify(response)), 200
        
        except ValidationError as err:
            print(err)
            response = {
                 'Status': 'Fail',
                 'Message': err.messages[0]
            }
            return make_response(jsonify(response)), 500


class LogoutAPI(MethodView):
    """Resources for logging out"""

    
    def post(self):
        auth_header = request.headers.get('Authorization')
        if auth_header:
            auth_token = auth_header.split(" ")[1]
        else:
            auth_token = ''
        if auth_token:
            token_reponse = UserModel.decode_auth_token(auth_token)
            if not isinstance(token_reponse, str):
                try:
                    UserRepo.logout(auth_token)
                    response = {
                        'Status': 'Success',
                        'Message': 'You are now logged out!'
                    }
                    return make_response(jsonify(response)), 200
                except Exception as e:
                    response = {
                        'Status': 'Fail',
                        'Message': e,
                    }
                    return make_response(jsonify(response)), 200
            else:
                response = {
                    'Status': 'Fail',
                    'Message': auth_token
                }
                return make_response(jsonify(response)), 401
        else:
            response = {
                'Status': 'Fail',
                'Message': 'Provide a valid auth token.'
            }
            return make_response(jsonify(response)), 403

class UserProfileAPI(MethodView):
    """Resources for changing User Information"""

    
    @parser.use_kwargs(UserSchema, location="json_or_form")
    def put(self, id, **kwargs):
        """Update any attribute of the User Model"""
        user = UserRepo.get_by_id(id)
        
        return user
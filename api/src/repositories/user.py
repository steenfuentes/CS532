import bcrypt as bc
from flask.helpers import make_response
from flask import jsonify, request
from functools import wraps
import webargs
from api import bcrypt
from webargs import ValidationError

from api.src.models.user import BlacklistToken, UserModel

class UserRepo():

    @staticmethod
    def validate_password(user: UserModel, password):
        """ Validate User Password """

        if not bcrypt.check_password_hash(user.password, password):
             raise ValidationError("Incorrect Password!")  

    @staticmethod
    def get_user_email(email):
        """ Validate Email & Query a User by their email"""
        user = UserModel.query.filter_by(email=email).one_or_none()
        if user is None:
            raise ValidationError("User does not exist!")

        return user
 
    @staticmethod
    def get_user_id(id):
        """ Query a User by their id"""
        user = UserModel.query.filter_by(id=id).one_or_none()
        if user is None:
            raise ValidationError("User does not exist!")
        
        return user

    
    
    @staticmethod
    def get_all():
        """ Query all the Users in the database. Return a dictionary."""

        print("Querying User table...")
        User_list = UserModel.query.all()

        return User_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new User"""
        
        user = UserModel(**kwargs)
    
        return user.save()
 
 
    def update(self, id, **kwargs):
        """ Update any attribute of the user"""

        User = self.get(id)
        for key, value in kwargs.items():
            setattr(User, key, value)
        
        return User.save()
    
    @staticmethod
    def logout(token):
        """ Blacklist JWT Token """
        blacklist_token = BlacklistToken(token=token)
        return blacklist_token.save()

    # decorator for verifying the JWT
    @staticmethod
    def token_required(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            auth_header = request.headers.get('Authorization')
            if auth_header:
                try:
                    auth_token = auth_header.split(" ")[1]
                except IndexError:
                    response = {
                        'Status': 'Fail',
                        'Message': 'Bearer Token Malformed'
                    }
                    return make_response(jsonify(response)), 401
            else:
                auth_token = ''
            if auth_token:
                token_response = UserModel.decode_auth_token(auth_token)
                if not isinstance(token_response, str):
                    user = UserRepo.get_user_id(token_response)
            else:
                response = {
                    'Status': 'Fail',
                    'Message': 'Provide a valid auth token.'
                }
                return make_response(jsonify(response)), 401
            return f(*args, **kwargs)
        
        return decorated

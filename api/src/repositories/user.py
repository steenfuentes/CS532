from flask.helpers import make_response
from flask import jsonify, request
from functools import wraps
import webargs
from webargs.flaskparser import abort
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
    def get_by_email(email):
        """ Validate Email & Query a User by their email"""
        user = UserModel.query.filter_by(email=email).one_or_none()
        if user is None:
            raise ValidationError("User does not exist!")

        return user
 
    @staticmethod
    def get_by_id(id):
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

        User = self.get_by_id(id)
        for key, value in kwargs.items():
            setattr(User, key, value)
        
        return User.save()
    
    @staticmethod
    def logout(token):
        """ Blacklist JWT Token """
        blacklist_token = BlacklistToken(token=token)
        return blacklist_token.save()

    # decorator for verifying the JWT
    def token_required(*accepted):
            def _decorate(function):
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
                        user = UserRepo.get_by_id(int(token_response))
                        UserRepo.verify_roles(user, *accepted)
                        print("Access Verified...")
                    else:
                        response = {
                            'Status': 'Fail',
                            'Message': 'Provide a valid auth token.'
                        }
                        return make_response(jsonify(response)), 401
                
                    return function(*args, **kwargs)
                return decorated
            return _decorate
        

    

    def verify_roles(user, *accepted):
        if accepted:
            missing_roles = [
                role_name
                for role_name in accepted
                if role_name not in user.roles
            ]
            
            if missing_roles:
                message="Missing acceptable role(s): {}".format(', '.join(missing_roles))
                response = {
                    'Status': 'Fail',
                    'Message': message
                }
                print(message)
                return abort(401, make_response(jsonify(response)))
        

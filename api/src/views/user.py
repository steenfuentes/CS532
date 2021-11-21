"""
Define the REST verbs for endpoints related to the User
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, use_kwargs, use_args

from api import bcrypt
from api.src.repositories.user import UserRepo
from api.src.models.user import UserModel, UserSchema


class UserAPI(MethodView):
    """ Verbs that are relative to the Users"""
    @staticmethod
    def validate_password(user: UserModel, password):
        """ Validate User Password """

        if not bcrypt.check_password_hash(user.password, password):
            raise ValidationError("Incorrect Password!")


    @staticmethod
    @use_kwargs(UserSchema, location="form")
    def get(email, password):
        """Validate User Login Information"""

        try:
            user = UserRepo.get(email)
            UserAPI.validate_password(user, password)
        except ValidationError as err:
            return jsonify({ 'Error': err.messages[0]})

        return {'Login': 'Successful!'}, 201


    @staticmethod
    @use_kwargs(UserSchema, location="form") 
    def post(id, email, password):
        """Create User using all of the incoming information"""
        
        UserRepo.create(id=id, email=email, password=password)

        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?


    @use_kwargs(UserSchema, location="form")
    def put(self, id, **kwargs):
        """Update any attribute of the User Model"""
        user = UserRepo.get(id)
        
        pass
"""
Defines Model for a User and Defines Methods for JWT Use
"""
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from flask import current_app
import jwt, datetime

from api import db
from api import bcrypt

from api.src.utils.stripped_string import StrippedString

from .abstractmodel import BaseModel, MetaBaseModel
from api.src.models import abstractmodel

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'usermodel'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, db.Identity(start=100), primary_key=True)
    email = db.Column(StrippedString(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False) # store the hashed password
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # user permission

    def __init__(self, email, password):
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def encode_auth_token(self, id):
        """
        Genereates JWT Auth Token
        :return: string
        """

        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=15),
                'iat': datetime.datetime.utcnow(),
                'sub': id
            }
            return jwt.encode(
                payload,
                current_app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e
    
    @staticmethod
    def decode_auth_token(auth_token):
        """
        Decodes JWT Toekn
        :param auth_token:
        :return: integer|string
        """

        try:
            payload = jwt.decode(auth_token, current_app.config.get('SECRET_KEY'))
            is_blacklisted = BlacklistToken.check_blacklist(auth_token)
            if is_blacklisted:
                return 'Token Blacklisted. Please log in again.'
            else:
                return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature Expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid Token. Please log in again.'


class UserSchema(Schema):
    id = fields.Integer()
    email = fields.Email()
    password = fields.String()


class BlacklistToken(db.Model, BaseModel, metaclass=MetaBaseModel):
    """
    Token Model for storing JWT Tokens
    """
    __tablename__ = 'blacklist_tokens'

    id = db.Column(db.Integer, primary_key=True) # Need to setup autoincrement of id
    token = db.Column(db.String(500), unique=True, nullable=False)
    blacklisted_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, token):
        self.token = token
        self.blacklisted_on = datetime.datetime.now()
    
    def __repr__(self):
        return '<id: token: {}'.format(self.token)

    def check_blacklist(auth_token):
        # check whether auth token has been blacklisted
        result = BlacklistToken.query.filter_by(token=str(auth_token)).first()
        if result:
            return True
        else:
            return False



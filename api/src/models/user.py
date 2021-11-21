"""
Defines model for a user
"""
from marshmallow import Schema, fields
from sqlalchemy.sql import func
from flask import current_app

from api import db
from api import bcrypt

from api.src.utils.stripped_string import StrippedString

from .abstractmodel import BaseModel, MetaBaseModel

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'usermodel'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(StrippedString(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False) # store the hashed password
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # user permission

    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = bcrypt.generate_password_hash(password, current_app.config.get('BCRYPT_LOG_ROUNDS'))

class UserSchema(Schema):
    id = fields.Integer()
    email = fields.Email()
    password = fields.String()


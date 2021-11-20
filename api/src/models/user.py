"""
Defines model for a user
"""
from enum import unique
from marshmallow import Schema, fields

from api import db
from api import bcrypt
from .abstractmodel import BaseModel, MetaBaseModel

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'usermodel'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False) # store the hashed password
    # user permission

class UserSchema(Schema):
    id = fields.Integer()
    email = fields.Email()
    password = fields.String()


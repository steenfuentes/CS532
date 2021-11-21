"""
Defines model for a user
"""
from enum import unique
from marshmallow import Schema, fields
from sqlalchemy.sql import func

from api import db
from api import bcrypt
from .abstractmodel import BaseModel, MetaBaseModel

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'usermodel'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False) # store the hashed password
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    # user permission

    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password

class UserSchema(Schema):
    id = fields.Integer()
    email = fields.Email()
    password = fields.String()


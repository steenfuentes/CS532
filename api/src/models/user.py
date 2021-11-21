"""
Defines model for a user
"""
from enum import unique
from marshmallow import Schema, fields

from api import db
from api import bcrypt
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.types import TypeDecorator


class StrippedString(TypeDecorator):

    impl = db.String

    def process_bind_param(self, value, dialect):
        # In case you have nullable string fields and pass None
        return value.strip() if value else value

    def copy(self, **kw):
        return StrippedString(self.impl.length)

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'usermodel'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.StrippedString(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False) # store the hashed password
    # user permission

class UserSchema(Schema):
    id = fields.Integer()
    email = fields.Email()
    password = fields.String()


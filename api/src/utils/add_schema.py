from api import ma
from marshmallow import validate
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_enum import EnumField
from enum import Enum

def add_schema(cls):
    """Automatically generate schema by decorating a model"""
    class Schema(ma.SQLAlchemyAutoSchema):
        class Meta:
            model = cls
    cls.Schema = Schema
    return cls
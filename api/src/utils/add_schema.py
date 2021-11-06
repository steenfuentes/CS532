from marshmallow import validate
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_enum import EnumField
from enum import Enum

from api import ma

def add_schema(cls):
    class Schema(ma.SQLAlchemyAutoSchema):
        class Meta:
            model = cls
            
    cls.Schema = Schema
    return cls
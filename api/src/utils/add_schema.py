from marshmallow import validate
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_enum import EnumField
from enum import Enum

from api import ma

def add_schema(cls):
    class Schema(ma.SQLAlchemyAutoSchema):
        class Meta:
            model = cls

    fields = Schema._declared_fields
    print(fields)

    # # support for enum types
    # for field_name, field_details in fields.items():
    #     if len(field_details.validate) > 0:
    #         enum_list = field_details.validate[0]
    #         enum_dict = {enum_list[i]: enum_list[i] for i in range(0, len(enum_list))}
    #         enum_clone = Enum(field_name.capitalize(), enum_dict)
    #         fields[field_name] = EnumField(enum_clone, by_value=True, validate=validate.OneOf(enum_list))

    cls.Schema = Schema
    return cls
"""
Define the model for an employee
"""
import enum
from marshmallow import fields, Schema
from marshmallow_enum import EnumField

from api import db, ma
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import backref, validates
from sqlalchemy.types import TypeDecorator


class StrippedString(TypeDecorator):

    impl = db.String

    def process_bind_param(self, value, dialect):
        # In case you have nullable string fields and pass None
        return value.strip() if value else value

    def copy(self, **kw):
        return StrippedString(self.impl.length)


class EmployeeType(enum.Enum):
    PA = "Phsyician's Assistant"
    RN = "Nurse"
    MA = "Medical Assistant"
    PD = "Pharamacist"
    LT = "Lab Technician"


class EmployeeModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'employeemodel'
    __table_args__ = {'extend_existing':True}

    id = db.Column(db.Integer(), primary_key=True)
    employee_type = db.Column(db.Enum(EmployeeType), nullable=False)
    first_name = db.Column(db.StrippedString(50), nullable=False)
    last_name = db.Column(db.StrippedString(50), nullable=False)
    start_date = db.Column(db.Date(), nullable=False)
    number = db.Column(db.StrippedString(15), nullable=True)        # nullable=False for production
    email = db.Column(db.StrippedString(50), nullable=True)         # nullable=False for production

    # relationships
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    login = db.relationship("UserModel", backref=backref("employeemodel", uselist=False))
    
class EmployeeSchema(Schema):
    id = fields.Integer()
    employee_type = EnumField(EmployeeType, error='by_name')
    first_name = fields.String()
    last_name = fields.String()
    start_date = fields.Date()
    number = fields.String()
    email = fields.Email()




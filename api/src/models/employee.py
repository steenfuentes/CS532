"""
Define the model for an employee
"""
import enum
from marshmallow import fields, Schema
from marshmallow_enum import EnumField

from api import db, ma
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import validates


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
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    start_date = db.Column(db.Date(), nullable=False)
    number = db.Column(db.String(15), nullable=True)        # nullable=False for production
    email = db.Column(db.String(50), nullable=True)         # nullable=False for production
    
class EmployeeSchema(Schema):
    id = fields.Integer()
    employee_type = EnumField(EmployeeType, error='by_name')
    first_name = fields.String()
    last_name = fields.String()
    start_date = fields.Date()
    number = fields.String()
    email = fields.Email()




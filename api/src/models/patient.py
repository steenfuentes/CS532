"""
Defines the model for a patient
"""

from flask_marshmallow.schema import Schema
from marshmallow import fields

from api import db
from api.src.models.laborder import LabOrderSchema
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.types import TypeDecorator


class StrippedString(TypeDecorator):

    impl = db.String

    def process_bind_param(self, value, dialect):
        # In case you have nullable string fields and pass None
        return value.strip() if value else value

    def copy(self, **kw):
        return StrippedString(self.impl.length)

class PatientModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'patientmodel'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.StrippedString(120), unique=False, nullable=False)
    last_name = db.Column(db.StrippedString(120), unique=False, nullable=False)
    number = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.StrippedString(50), unique=True, nullable= True)
    address = db.Column(db.String(200), unique=False, nullable=True)
    insurance = db.Column(db.String(50), unique=False, nullable=True)
    dob = db.Column(db.String(20), unique=False, nullable=True)
    gender = db.Column(db.String(20), unique=False, nullable=True)
    medications = db.Column(db.String(200), unique=False, nullable=True) # need to implement a one to many relationship for a Patient model to Medication models

    # foreign keys
    pcp_id = db.Column(db.Integer, db.ForeignKey("physicianmodel.id"))

    # relationships
    lab_orders = db.relationship("LabOrderModel", backref="patientmodel", lazy=True)
    appointments = db.relationship("AppointmentModel", backref="patientmodel", lazy=True)

    def __init__(self, id, first_name, last_name, number, email="",
                    address="", insurance="", dob="", gender="", pcp_id="", 
                    medications="", appointments=[], lab_orders=[]):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.number = number
        self.email = email
        self.address = address
        self.insurance = insurance
        self.dob = dob
        self.gender = gender
        self.pcp = pcp_id
        self.medications = medications
        self.appointments = appointments
        self.lab_orders = lab_orders


class PatientSchema(Schema): 
    
    id = fields.Integer(required=True)
    first_name = fields.String()
    last_name = fields.String()
    number = fields.String()
    email = fields.Email()
    address = fields.String()
    insurance = fields.String()
    dob = fields.String()
    gender = fields.String()
    pcp_id = fields.Integer()
    medications = fields.String()
    appointments = fields.String()
    lab_orders = fields.List(fields.Nested(LabOrderSchema()))

    
    


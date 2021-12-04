"""
Defines the model for a patient
"""

from flask_marshmallow.schema import Schema
from marshmallow import fields

from api import db
from api.src.models.appointment import AppointmentSchema
from api.src.models.laborder import LabOrderSchema
from .abstractmodel import BaseModel, MetaBaseModel
from api.src.utils.stripped_string import StrippedString

class PatientModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'patientmodel'

    id = db.Column(db.Integer, db.Identity(start=1), primary_key=True)
    owner = db.Column(db.Integer, default = 1, nullable=False)
    group = db.Column(db.Integer, default = 8, nullable=False) # default group is medical staff
    status = db.Column(db.Integer, default = 0, nullable=False) # status irrelevant 

    first_name = db.Column(StrippedString(120), unique=False, nullable=False)
    last_name = db.Column(StrippedString(120), unique=False, nullable=False)
    number = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(StrippedString(50), unique=True, nullable= True)
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

    def __init__(self, first_name, last_name, number, email="",
                    address="", insurance="", dob="", gender="", pcp_id="", 
                    medications="", appointments=[], lab_orders=[]):
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
    id = fields.Integer()
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
    appointments = fields.List(fields.Nested(AppointmentSchema()))
    lab_orders = fields.List(fields.Nested(LabOrderSchema()))

    
    


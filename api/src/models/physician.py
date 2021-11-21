"""
Defines model for a physician
"""
from marshmallow import Schema, fields

from api import db
from .abstractmodel import BaseModel, MetaBaseModel
from api.src.models.patient import PatientSchema
from api.src.models.laborder import LabOrderSchema
from api.src.models.appointment import AppointmentSchema
from api.src.utils.stripped_string import StrippedString

class PhysicianModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'physicianmodel'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(StrippedString(50), unique=False, nullable=False)
    last_name = db.Column(StrippedString(50), unique=False, nullable=False)
    number = db.Column(db.String(15), unique=False, nullable=True) # Change to nullable=False for production
    email = db.Column(StrippedString(50), unique=True, nullable=True) # Change to nullable=False for production

    # relationships this model is a parent to
    appointments = db.relationship("AppointmentModel", backref="physicianmodel", lazy='select')
    patients = db.relationship("PatientModel", backref="physicianmodel", lazy='select')
    lab_orders = db.relationship("LabOrderModel", backref="physicianmodel", lazy='select')

def __init__(self, id, first_name, last_name, number="", email="", appointments=[], patients=[], lab_orders=[]):
    self.id = id
    self.first_name = first_name
    self.last_name = last_name
    self.number = number
    self.email = email
    self.appointments = appointments
    self.patients = patients
    self.lab_orders = lab_orders

class PhysicianSchema(Schema):
    id = fields.Integer()
    first_name = fields.String()
    last_name = fields.String()
    number = fields.String()
    email = fields.Email()
    appointments = fields.List(fields.Nested(AppointmentSchema()))
    patients = fields.List(fields.Nested(PatientSchema()))
    lab_orders = fields.List(fields.Nested(LabOrderSchema()))

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

    id = db.Column(db.Integer, db.Identity(start=1), primary_key=True)
    owner = db.Column(db.Integer, default = 1, nullable=False)
    group = db.Column(db.Integer, default = 2, nullable=False) # default group is admin
    status = db.Column(db.Integer, default = 4, nullable=False) # default status active

    first_name = db.Column(StrippedString(50), unique=False, nullable=False)
    last_name = db.Column(StrippedString(50), unique=False, nullable=False)
    number = db.Column(db.String(15), unique=False, nullable=True) # Change to nullable=False for production
    email = db.Column(StrippedString(50), unique=True, nullable=True) # Change to nullable=False for production

    # relationships this model is a parent to
    appointments = db.relationship("AppointmentModel",cascade="all,delete", backref="physicianmodel", lazy='select')
    patients = db.relationship("PatientModel", cascade="all,delete",backref="physicianmodel", lazy='select')
    lab_orders = db.relationship("LabOrderModel", cascade="all,delete",backref="physicianmodel", lazy='select')
    pharmacy_orders = db.relationship("PharmacyOrderModel", cascade="all,delete",backref="physicianmodel", lazy='select')

<<<<<<< HEAD
def __init__(self,first_name, last_name, number="", email="", appointments=[], patients=[], lab_orders=[]): 
=======
def __init__(self, first_name, last_name, number="", email="", appointments=[], patients=[], lab_orders=[]):
>>>>>>> acef88fb86d206cb0a62f5bced166920bb816d30
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

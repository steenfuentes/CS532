"""
Defines model for a physician
"""
from marshmallow import Schema, fields

from api import db
from .abstractmodel import BaseModel, MetaBaseModel
from api.src.models.patient import PatientModel, PatientSchema
from api.src.models.laborder import LabOrderModel, LabOrderSchema


class PhysicianModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'physicianmodel'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    number = db.Column(db.String(15), unique=False, nullable=True) # Change to nullable=False for production
    schedule = db.Column(db.String(20), unique=False, nullable=True) # create a one to many relationship with existing appointments in the database
    
    patients = db.relationship("PatientModel", backref="physicianmodel", lazy='select')
    lab_orders = db.relationship("LabOrderModel", backref="physicianmodel", lazy='select')

def __init__(self, id, name, number="", schedule="", patients=[], lab_orders=[]):
    self.id = id
    self.name = name
    self.number = number
    self.schedule = schedule
    self.patients = patients
    self.lab_orders = lab_orders

class PhysicianSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    number = fields.String()
    schedule = fields.String()
    patients = fields.List(fields.Nested(PatientSchema()))
    lab_orders = fields.List(fields.Nested(LabOrderSchema()))

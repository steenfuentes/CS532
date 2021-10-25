"""
Defines model for a physician
"""
from api import db
from .abstractmodel import BaseModel, MetaBaseModel
from api.src.models.patient import PatientModel
from api.src.models.laborder import LabOrderModel
from api.src.utils.add_schema import add_schema

@add_schema
class PhysicianModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'physicianmodel'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    number = db.Column(db.String(15), unique=False, nullable=False)
    schedule = db.Column(db.String(20), unique=False, nullable=True)
    
    patients = db.relationship("PatientModel", backref="physicianmodel", uselist=False)
    lab_orders = db.relationship("LabOrderModel", backref="physicianmodel")

def __init__(self, id, name, number, schedule, patients=tuple(), lab_orders=tuple()):
    self.id = id
    self.name = name
    self.number = number
    self.schedule = schedule
    self.patients = patients
    self.lab_orders = lab_orders
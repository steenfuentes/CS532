"""
Defines model for a physician
"""
from api import db
from .abstractmodel import BaseModel, MetaBaseModel

class PhysicianModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'physician'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    number = db.Column(db.String(15), unique=False, nullable=False)
    schedule = db.Column(db.String(20), unique=False, nullable=True)

def __init__(self, id, name, number, schedule):
    self.id = id
    self.name = name
    self.number = number
    self.schedule = schedule
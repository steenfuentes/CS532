from enum import unique

from marshmallow.fields import Email
from api import db
from .abstractmodel import BaseModel, MetaBaseModel
from api.src.utils.add_schema import add_schema

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system

@add_schema
class EquipmentModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'equipmentmodel'

    id = db.Column(db.Integer, primary_key=True)
    etype = db.Column(db.String(20), unique=False, nullable=False)
    edescription = db.Column(db.String(200), unique=False, nullable=False)
    department = db.Column(db.String(30), unique=False, nullable=False)
    own = db.Column(db.Boolean, unique=False, nullable=False)
    pdate = db.Column(db.Date)

    def __init__(self, id, etype, edescription, department, own, pdate):
        self.id = id
        self.etype = etype
        self.edescription = edescription
        self.department = department
        self.own = own
        self.pdate = pdate
        
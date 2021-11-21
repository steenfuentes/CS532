"""
Defines the model for a medication
"""
import enum
from flask_marshmallow.schema import Schema
from marshmallow import validate, pre_load, schema, fields
from marshmallow_enum import EnumField

from api import db
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import validates


#enumerate marketing status
class MarketingStatus(enum.Enum):
    Discontinued = "Discontinued"
    OTC = "Over-the-counter"
    Prescription = "Prescription"
    Notavail = "None (Tentative Approval)"

# just outlining the basic info needed that defines a medication 
# a more elegent approach will establish patients as objects in the system
class MedicationModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'medicationmodel'

    id = db.Column(db.Integer, primary_key=True)
    brand_name = db.Column(db.String(64), unique=False, nullable=False)
    reference_standard = db.Column(db.String(64), unique=False, nullable=False)
    dosage_form = db.Column(db.String(64), unique=False, nullable=False)
    route = db.Column(db.String(64), unique=False, nullable=False)
    marketing_status = db.Column(db.Enum(MarketingStatus), nullable= False)
    medicine_stock =  db.Column(db.Integer)
    
def __init__(self, id, brand_name, reference_standard, dosage_form, route, marketing_status, medicine_stock):
        self.id = id
        self.brand_name = brand_name
        self.reference_standard = reference_standard
        self.dosage_form = dosage_form
        self.route = route
        self.marketing_status = marketing_status
        self.medicine_stock = medicine_stock

class MedicationSchema(Schema):
    id = fields.Integer(required=True)
    brand_name = fields.String()
    reference_standard = fields.String()
    dosage_form = fields.String()
    route = fields.String()
    marketing_status = EnumField(MarketingStatus)
    medicine_stock = db.Column(db.Integer)
        
"""
Define the model for pharmacy order
"""
import enum
from flask_marshmallow.schema import Schema
from marshmallow import validate, pre_load, schema, fields
from marshmallow_enum import EnumField

from api import db, ma
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import validates

class PharmacyOrderModel(db.Model):
    __tablename__ = 'pharmacyordermodel'
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    patient_id = db.Column(db.Integer, db.ForeignKey('patientmodel.id'))
    physician_id = db.Column(db.Integer, db.ForeignKey('physicianmodel.id'))
    medication = db.Column(db.String(64), db.ForeignKey('medicationmodel.id'))
    pharmacist = db.Column(db.String(64), unique=False, nullable=False)
    dosage = db.Column(db.Integer)
    order_date = db.Column(db.String(60), nullable=True)
    pickup_date = db.Column(db.String(60), nullable=True)
    filled_date = db.Column(db.String(60), nullable=True)
    
    def __init__(self, id, patient_id, medication, pharmacist, dosage, order_date, pickup_date, filled_date):
        self.id = id
        self.patient_id = patient_id
        self.medication = medication
        self.pharmacist = pharmacist
        self.dosage = dosage
        self.order_date = order_date
        self.pickup_date = pickup_date
        self.filled_date = filled_date
        
class PharmacyOrderSchema(Schema):
    id = fields.Integer(required=True)
    patient_id = fields.String()
    physician_id = fields.String()
    medication = fields.String()
    pharmacist = fields.String()
    dosage = fields.Integer()
    order_date = fields.String()
    pickup_date = fields.String()
    filled_date = fields.String()
    



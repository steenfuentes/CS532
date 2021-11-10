"""
Define the model for a lab order
"""
import enum
from flask_marshmallow.schema import Schema
from marshmallow import validate, pre_load, schema, fields
from marshmallow_enum import EnumField

from api import db, ma
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import validates

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system
class TestType(enum.Enum):
    CBC = "Complete Blood Count"
    WBC = "White Blood Cell Count"
    hCG = "Pregnancy Test"
    GGT = "Gamma-glutamyl Transferase Print"
    FE = "Iron Test"
    CRP = "C-reactive Protein Test"
    PT = "Prothrombin Time"
    BMP = "Basic Metabolic Panel"
    CMP = "Comprehensive Metabolic Panel"
    LP = "Lipid Panel"
    HP = "Liver panel"
    TSH = "Thyroid Stimulating Hormone"
    HA1C = "Hemoglobin A1C"
    U = "Urinalysis"
    C = "Cultures"

class LabOrderModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'labordermodel'
    __table_args__ = {'extend_existing':True}

    id = db.Column(db.Integer, primary_key=True)
    test_type = db.Column(db.Enum(TestType), nullable=True) #Implement an enumeration for this column
    date_performed = db.Column(db.String(60), nullable=True)
    performed_by = db.Column(db.String(60), nullable=True) # Create reference to an employee database table?
    results = db.Column(db.String(120), nullable=True) # Create a database table for results?
    patient_id = db.Column(db.Integer, db.ForeignKey('patientmodel.id'))
    physician_id = db.Column(db.Integer, db.ForeignKey('physicianmodel.id'))

    def __init__(self, id, test_type, patient_id =None, physician_id=None, date_performed="", performed_by="", results=""):
        self.id = id
        self.test_type = test_type
        self.patient_id = patient_id
        self.physician_id = physician_id
        self.date_performed = date_performed
        self.performed_by = performed_by
        self.results = results

class LabOrderSchema(Schema):
    test_type = EnumField(TestType, error='by_name') 
    id = fields.Integer(required=True)
    date_performed = fields.String()
    performed_by = fields.String()
    results = fields.String()
    patient_id = fields.Integer()
    physician_id = fields.Integer()

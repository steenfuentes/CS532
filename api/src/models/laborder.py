"""
Define the model for a lab order
"""
import enum
from flask_marshmallow.schema import Schema
from marshmallow import validate, pre_load, schema, fields
from marshmallow_enum import EnumField

from api import db, ma
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import backref, validates


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

    id = db.Column(db.Integer, db.Identity(start=1), primary_key=True)
    owner = db.Column(db.Integer, default = 2, nullable=False)
    group = db.Column(db.Integer, default = 32, nullable=False) # default group is Lab Staff
    status = db.Column(db.Integer, default = 16, nullable=False) # default status is pending

    test_type = db.Column(db.Enum(TestType), nullable=True) #Implement an enumeration for this column
    date_performed = db.Column(db.Date, nullable=False) #change format to date
 # Create reference to an employee database table?
    results = db.Column(db.String(120), nullable=True) # Create a database table for results?

    performed_by = db.relationship("EmployeeModel", backref='labordermodel', uselist=False)

    tech_id = db.Column(db.Integer, db.ForeignKey('employeemodel.id'))
    patient_id = db.Column(db.Integer, db.ForeignKey('patientmodel.id'))
    physician_id = db.Column(db.Integer, db.ForeignKey('physicianmodel.id'))

    def __init__(self, test_type, patient_id =None, physician_id=None, date_performed="", results=""):
        self.test_type = test_type
        self.patient_id = patient_id
        self.physician_id = physician_id
        self.date_performed = date_performed
        self.results = results

class LabOrderSchema(Schema):
    test_type = EnumField(TestType, error='by_name') 
    id = fields.Integer()
    date_performed = fields.String()
    results = fields.String()
    performed_by = fields.String()
    tech_id = fields.Integer()
    patient_id = fields.Integer()
    physician_id = fields.Integer()


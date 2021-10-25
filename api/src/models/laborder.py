"""
Define the model for a lab order
"""
import enum
from api import db
from api.src.utils.add_schema import add_schema
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


@add_schema
class LabOrderModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'labordermodel'
    __table_args__ = {'extend_existing':True}

    id = db.Column(db.Integer, primary_key=True)
    test_type = db.Column(db.Enum(TestType)) #Implement an enumeration for this column
    date_performed = db.Column(db.String(60), nullable=True)
    performed_by = db.Column(db.String(60), nullable=True) # Create reference to an employee database table?
    results = db.Column(db.String(120), nullable=True) # Create a database table for results?

    patient_id = db.Column(db.Integer, db.ForeignKey('patientmodel.id'))
    physician_id = db.Column(db.Integer, db.ForeignKey('physicianmodel.id'))

    def __init__(self, id, patient, patient_id, physician_id, test_type="", date_performed="", performed_by="", results=""):
        self.id = id
        self.patient = patient 
        self.patient_id = patient_id
        self.physician_id = physician_id
        self.test_type = test_type
        self.date_performed = date_performed
        self.performed_by = performed_by
        self.results = results
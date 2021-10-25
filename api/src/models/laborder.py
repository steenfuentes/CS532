"""
Define the model for a lab order
"""

import re
from api import db
from api.src.utils.add_schema import add_schema
from .abstractmodel import BaseModel, MetaBaseModel
from sqlalchemy.orm import validates

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system
@add_schema
class LabOrderModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'labordermodel'
    __table_args__ = {'extend_existing':True}

    id = db.Column(db.Integer, primary_key=True)
    test_type = db.Column(db.String(60), nullable=False) #Implement an enumeration for this column
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
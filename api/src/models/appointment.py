"""
Defines model and schema for appointments
"""
from datetime import datetime
from flask_marshmallow.schema import Schema
from marshmallow import fields
from sqlalchemy.orm import validates

from api.src.models.laborder import LabOrderSchema
from .abstractmodel import BaseModel, MetaBaseModel
from api import db

class AppointmentModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'appointmentmodel'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.DateTime(timezone=True), nullable=False)
    
    # relationships (1 to 1)
    patient_id = db.Column(db.Integer, db.ForeignKey('patientmodel.id'))
    physician_id = db.Column(db.Integer, db.ForeignKey('physicianmodel.id'))

    def __init__(self, id, date, time, patient_id="", phsyician_id=""):
        self.id = id
        self.date = date
        self.time = time
        self.patient_id = patient_id
        self.physician_id = phsyician_id

class AppointmentSchema(Schema):
    id = fields.Integer()
    date = fields.Date()
    time = fields.Time()
    patient_id = fields.Integer()
    physician_id = fields.Integer()


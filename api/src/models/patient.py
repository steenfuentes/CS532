"""
Defines the model for a patient
"""

from marshmallow.fields import Email
from api import db
from .abstractmodel import BaseModel, MetaBaseModel

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system
class Patient(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'patient'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    number = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable= True)
    address = db.Column(db.String(200), unique=False, nullable=True)
    insurance = db.Column(db.String(30), unique=False, nullable=True)
    dob = db.Column(db.String(20), unique=False, nullable=True)
    gender = db.Column(db.Boolean, unique=False, nullable=True)
    pcp = db.Column(db.String(50), unique=False, nullable=True) 
    medications = db.Column(db.String(200), unique=False, nullable=True) # need to implement a one to many relationship for a Patient model to Medication models
    appointments = db.Column(db.String(200), unique=False, nullable=True) # One to many relationship to Appointment model? 

    def __init__(self, id, first_name, last_name, number, email=None,
                    address=None, insurance=None, dob=None, gender=None, pcp=None, 
                    medications=None, appointments=None):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.number = number
        self.email = email
        self.address = address
        self.insurance = insurance
        self.dob = dob
        self.gender = gender
        self.pcp = pcp
        self.medications = medications
        self.appointments = appointments

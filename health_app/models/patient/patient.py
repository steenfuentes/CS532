from health_app import db
from flask import current_app

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system
class Patient(db.Model):
    __tablename__ = 'patient'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    number = db.Column(db.String(20), unique=False, nullable=False)
    address = db.Column(db.String(200), unique=False, nullable=False)
    insurance = db.Column(db.String(30), unique=False, nullable=True)
    dob = db.Column(db.String(20), unique=False, nullable=False)
    gender = db.Column(db.Boolean, unique=False, nullable=False)
    pcp = db.Column(db.String(50), unique=False, nullable=False) 
    medications = db.Column(db.String(200), unique=False, nullable=True) #turn this into an array of medications, implement methods for adding medications
    appointments = db.Column(db.String(200), unique=False, nullable=True) # relate to scheduler module/database, pull all associated appointments

    def __repr__(self):
        return f"Patient('{self.name}')" 

    # method to be used when prescribing a medication 
    # will add the medication to the patient database
    def add_medication(self):
        pass

from flask import Blueprint, jsonify, request
from .patient import Patient
from api import db

patient = Blueprint('patient', __name__)

# methods for accessing patient data and manipulating patient objects will go here
@patient.route('/records', methods=['POST'])
def add_patient():
    patient_data = request.get_json()


    new_patient = Patient(id=patient_data['id'], name=patient_data['name'])
    db.session.add(new_patient)
    db.session.commit()

    return 'Done', 201
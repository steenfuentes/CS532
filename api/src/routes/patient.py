from flask import Blueprint
from flask_restful import Api

from api.src.resources.patient import PatientResource

PATIENT_BLUEPRINT = Blueprint('patient', __name__)
Api(PATIENT_BLUEPRINT).add_resource(
    PatientResource, "/records/"
)

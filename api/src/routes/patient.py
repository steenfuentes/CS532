from flask import Blueprint
from flask_restful import Api

from api.src.resources import PatientResource

PATIENT_BLUEPRINT = Blueprint('patient', __name__)
Api(PATIENT_BLUEPRINT).add_resource(
    PatientResource, "/records/<int:id>/<string:first_name>/<string:last_name>/<string:number>"
)

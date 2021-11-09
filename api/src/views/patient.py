"""
Define the REST verbs for endpoints related to a patient
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, use_kwargs, use_args

from api.src.repositories.patient import PatientRepo
from api.src.models.patient import PatientModel, PatientSchema

class PatientAPI(MethodView):
    """ Verbs that are relative to the patients"""

    @staticmethod
    def get(id):
        """ Return a user based on the id"""
        if id is None:
            p = PatientRepo.get_all()
            schema = PatientSchema(many=True)
            result = schema.dump(p)
            return jsonify({"Patients": result})
        else:
            p = PatientRepo.get(id)
            print(p)
            schema = PatientSchema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(PatientSchema()) 
    def post(**kwargs):
        """Create patient using all of the incoming information"""
        PatientRepo.create(**kwargs)

        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @staticmethod
    @use_kwargs(PatientSchema())
    def put(id, **kwargs):
        """Update any attribute of the Patient Model"""
        repository = PatientRepo()
        updated_patient = repository.update(id, **kwargs)

        return jsonify({'Updated': (updated_patient.first_name, updated_patient.last_name)}), 201
"""
Define the REST verbs
"""
from flask_restful import Resource
from marshmallow.utils import EXCLUDE

from api.src.repositories import PatientRepository
from api.src.schema import PatientSchema
from api.src.models.patient import Patient
from flask import request
from webargs.flaskparser import use_kwargs

class PatientResource(Resource):
    """ Verbs that are relative to the users"""
    
    @staticmethod
    @use_kwargs(PatientSchema())
    def get(last_name, first_name):
        """ Return a user based on the name"""
        p = PatientRepository.get(last_name=last_name, first_name=first_name)
        schema = PatientSchema()
        result = schema.dump(p)

        return result

    @staticmethod
    @use_kwargs(PatientSchema())
    def post(**kwargs):
        """Create patient using all of the sent information"""
        data = request.get_json()
        print("The sent data:", data)
        PatientRepository.create(**kwargs)
        
        return {'Status': 'Complete!'}, 201
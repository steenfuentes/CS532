"""
Define the REST verbs
"""
from flask.views import MethodView
from flask import json, jsonify
from webargs.flaskparser import use_kwargs

from api.src.repositories.patient import PatientRepository
from api.src.schema import PatientSchema

class PatientAPI(MethodView):
    """ Verbs that are relative to the patients"""

    @staticmethod
    def get(id):
        """ Return a user based on the id"""
        if id is None:
            p = PatientRepository.get_all()
            schema = PatientSchema(many=True)
        else:
            p = PatientRepository.get(id)
            print(p)
            schema = PatientSchema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(PatientSchema())
    def post(**kwargs):
        """Create patient using all of the incoming information"""
        PatientRepository.create(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the Patient Model"""
        pass
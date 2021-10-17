"""
Define the REST verbs
"""
from flask_restful import Resource
from flask.views import MethodView
from webargs.flaskparser import use_kwargs

from api.src.repositories import PatientRepository
from api.src.schema import PatientSchema

class PatientResource():
    """ Verbs that are relative to the patients"""
    
    @staticmethod
    @use_kwargs(PatientSchema())
    def get(last_name, first_name):
        """ Return a user based on the name"""
        p = PatientRepository.get(last_name, first_name)
        schema = PatientSchema()
        result = schema.dump(p)

        return result

    @staticmethod
    @use_kwargs(PatientSchema())
    def post(**kwargs):
        """Create patient using all of the sent information"""
        PatientRepository.create(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the Patient Model"""
        pass
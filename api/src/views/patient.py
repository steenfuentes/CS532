"""
Define the REST verbs
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, use_kwargs, use_args

from api.src.repositories.patient import PatientRepo
from api.src.models.patient import PatientModel

class PatientAPI(MethodView):
    """ Verbs that are relative to the patients"""

    @staticmethod
    def get(id):
        """ Return a user based on the id"""
        if id is None:
            p = PatientRepo.get_all()
            schema = PatientModel.Schema()
        else:
            p = PatientRepo.get(id)
            print(p)
            schema = PatientModel.Schema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(PatientModel.Schema) 
    def post(**kwargs):
        """Create patient using all of the incoming information"""
        PatientRepo.create(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the Patient Model"""
        pass
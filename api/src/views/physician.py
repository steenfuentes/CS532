"""
Define the REST verbs for endpoints related to a Physician
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, use_kwargs, use_args

from api.src.repositories.physician import PhysicianRepo
from api.src.models.physician import PhysicianModel

class PhysicianAPI(MethodView):
    """ Verbs that are relative to the Physicians"""

    @staticmethod
    def get(id):
        """ Return a physician based on the id"""
        if id is None:
            p = PhysicianRepo.get_all()
            schema = PhysicianModel.Schema()
        else:
            p = PhysicianRepo.get(id)
            print(p)
            schema = PhysicianModel.Schema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(PhysicianModel.Schema) 
    def post(**kwargs):
        """Create Physician using all of the incoming information"""
        PhysicianRepo.create(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the Physician Model"""
        pass
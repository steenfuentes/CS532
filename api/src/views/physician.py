"""
Define the REST verbs for endpoints related to a Physician
"""
from re import M
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, use_kwargs, use_args

from api.src.repositories.user import UserRepo
from api.src.repositories.physician import PhysicianRepo
from api.src.models.physician import PhysicianModel, PhysicianSchema

class PhysicianAPI(MethodView):
    """ Verbs that are relative to the Physicians"""

    @staticmethod
    @UserRepo.token_required
    def get(id):
        """ Return a physician based on the id"""
        if id is None: 
            p = PhysicianRepo.get_all()
            schema = PhysicianSchema(many=True)
            result = schema.dump(p, many=True)
            return jsonify({"Physicians": result})

        else:
            p = PhysicianRepo.get(id)
            schema = PhysicianSchema()
            result = schema.dump(p)
       
        return result


    @staticmethod
    @UserRepo.token_required
    @use_kwargs(PhysicianSchema, location="form") 
    def post(**kwargs):
        """Create Physician using all of the incoming information"""

        PhysicianRepo.create(**kwargs)

        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?


    @UserRepo.token_required
    @use_kwargs(PhysicianSchema, location="form")
    def put(self, id, **kwargs):
        """Update any attribute of the Physician Model"""
        physician = PhysicianRepo.get(id)
        
        pass
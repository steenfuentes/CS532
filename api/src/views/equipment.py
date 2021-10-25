"""
Define the REST verbs
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.utils import pprint
from webargs.flaskparser import use_kwargs

from api.src.repositories.equipment import EquipmentRepo
from api.src.models.equipment import EquipmentModel

class EquipmentAPI(MethodView):
    """ Verbs that are relative to equipment"""

    @staticmethod
    def get(id):
        """ Return equipment based on the id"""
        if id is None:
            p = EquipmentRepo.get_all()
            schema = EquipmentModel.Schema(many=True)
        else:
            p = EquipmentRepo.get(id)
            print(p)
            schema = EquipmentModel.Schema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(EquipmentModel.Schema)
    def post(**kwargs):
        """Create equipment using all of the incoming information"""
        schema = EquipmentModel.Schema(missing=set)
        schema.load(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the Equipment Model"""
        pass
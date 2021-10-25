"""
Define the REST verbs for a Lab Order
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.utils import pprint
from webargs.flaskparser import use_kwargs

from api.src.repositories.laborder import LabOrderRepo
from api.src.models.laborder import LabOrderModel

class LabOrderAPI(MethodView):
    """ Verbs that are relative to a lab"""

    @staticmethod
    def get(id):
        """ Return LabOrder based on the id"""
        if id is None:
            p = LabOrderRepo.get_all()
            schema = LabOrderModel.Schema(many=True)
        else:
            p = LabOrderRepo.get(id)
            print(p)
            schema = LabOrderModel.Schema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @use_kwargs(LabOrderModel.Schema)
    def post(**kwargs):
        """Create LabOrder using all of the incoming information"""
        schema = LabOrderModel.Schema(missing=set)
        schema.load(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs
    def put(**kwargs):
        """Update any attribute of the LabOrder Model"""
        pass
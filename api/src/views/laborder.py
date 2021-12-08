"""
Define the REST verbs for a Lab Order
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.utils import pprint
from webargs import fields
from webargs.flaskparser import parser
from webargs.multidictproxy import MultiDictProxy

from api.src.repositories.laborder import LabOrderRepo
from api.src.models.laborder import LabOrderModel, TestType, LabOrderSchema

class LabOrderAPI(MethodView):
    """ Verbs that are relative to a lab"""
    @staticmethod
    def get(id):
        """ Return LabOrder based on the id"""
        if id is None:
            l = LabOrderRepo.get_all()
            schema = LabOrderSchema(many=True)
            result = schema.dump(l)
            return jsonify({"LAB ORDERS": result})
        else:
            p = LabOrderRepo.get(id)
            print(p)
            schema = LabOrderSchema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @parser.use_kwargs(LabOrderSchema, location="json_or_form")
    def post(id,**kwargs):
        """Create LabOrder using all of the incoming information"""
        LabOrderRepo.create(id=id,**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @parser.use_kwargs(LabOrderSchema, location="json_or_form")
    def put(id, **kwargs):
        """Update any attribute of the LabOrder Model"""
        order = LabOrderRepo.get(id)
        order.update(**kwargs)
        order.save()
        return {'Status': 'Complete!'}, 201
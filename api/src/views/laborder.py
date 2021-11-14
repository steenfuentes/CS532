"""
Define the REST verbs for a Lab Order
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.utils import pprint
from webargs import fields
from webargs.flaskparser import use_kwargs,use_args,parser
from webargs.multidictproxy import MultiDictProxy

from api.src.repositories.laborder import LabOrderRepo
from api.src.models.laborder import LabOrderModel, TestType, LabOrderSchema

class LabOrderAPI(MethodView):
    # @parser.location_loader("json_and_form")
    # def load_json_or_form(self, req):
    #     """Load data from a request, accepting either JSON or form-encoded
    #     data.

    #     The data will first be loaded as JSON, and, if that fails, it will be
    #     loaded as a form post.
    #     """
    #     data = self.load_json(req)
    #     if data:
    #         return data
    #     return self.load_form(req)


    # """ Verbs that are relative to a lab"""
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
    @use_kwargs(LabOrderSchema, location="form")
    def post(id,**kwargs):
        """Create LabOrder using all of the incoming information"""
        LabOrderRepo.create(id=id,**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs(LabOrderSchema, location="form")
    def put(id, **kwargs):
        """Update any attribute of the LabOrder Model"""
        order = LabOrderRepo.get(id)
        order.update(**kwargs)
        order.save()
        return {'Status': 'Complete!'}, 201
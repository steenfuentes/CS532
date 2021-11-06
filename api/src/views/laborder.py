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
    @parser.location_loader("json_and_form")
    def load_data(request, schema):
        # relies on the Flask (werkzeug) MultiDict type's implementation of
        # these methods, but when you're extending webargs, you may know things
        # about your framework of choice
        newdata = request.args.copy()
        newdata.update(request.form)
        return MultiDictProxy(newdata, schema)


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
    @use_kwargs(LabOrderSchema)
    def post(id,**kwargs):
        """Create LabOrder using all of the incoming information"""
        LabOrderRepo.create(id=id,**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @use_kwargs(LabOrderSchema)
    def put(id, **kwargs):
        """Update any attribute of the LabOrder Model"""
        order = LabOrderRepo.get(id)
        order.update(**kwargs)
        order.save()
        return {'Status': 'Complete!'}, 201
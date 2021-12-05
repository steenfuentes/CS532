"""
Define the REST verbs for endpoints related to a pharmacy order 
"""
from flask.views import MethodView
from flask import json, jsonify
from marshmallow import ValidationError
from marshmallow.decorators import VALIDATES
from marshmallow.utils import pprint
from webargs.flaskparser import abort, parser, use_kwargs, use_args

from api.src.repositories.pharmacyorder import PharmacyOrderRepo
from api.src.models.pharmacyorder import PharmacyOrderModel, PharmacyOrderSchema
from api.src.repositories.user import UserRepo

class PharmacyOrderAPI(MethodView):
    """ Verbs that are relative to the PharmacyOrders"""

    @staticmethod
    @UserRepo.token_required()
    def get(id):
        """ Return a pharmacy order based on the id"""
        if id is None:
            p = PharmacyOrderRepo.get_all()
            schema = PharmacyOrderSchema(many=True)
            result = schema.dump(p)
            return jsonify({"PharmacyOrders": result})
        else:
            p = PharmacyOrderRepo.get(id)
            print(p)
            schema = PharmacyOrderSchema()
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    # @UserRepo.token_required()
    @parser.use_kwargs(PharmacyOrderSchema(), location="json_or_form") 
    def post(**kwargs):
        """Create PharmacyOrder using all of the incoming information"""
        PharmacyOrderRepo.create(**kwargs)

        return {'Status': 'Complete!'}, 201 

    @staticmethod
    @UserRepo.token_required()
    @parser.use_kwargs(PharmacyOrderSchema(), location="json_or_form")
    def put(id, **kwargs):
        """Update any attribute of the PharmacyOrder Model"""
        repository = PharmacyOrderRepo()
        updated_PharmacyOrder = repository.update(id, **kwargs)

        return jsonify({'Updated': (updated_PharmacyOrder.first_name, updated_PharmacyOrder.last_name)}), 201
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

import api.src.repositories.laborder as lorepo
import api.src.models.schema as s

class LabOrderAPI(MethodView):
    """ Verbs that are relative to a lab"""
    @staticmethod
    def get(id):
        """ Return LabOrder based on the id"""
        if id is None:
<<<<<<< HEAD
            l = lorepo.LabOrderRepo.get_all()
            schema = s.LabOrderSchema(many=True)
=======
            l = LabOrderRepo.get_all()
            schema = LabOrderSchema(many=True)
>>>>>>> c58233b8e9cf595e9ffbfefbe2dd0bbe261a1fcb
            result = schema.dump(l)
            return jsonify({"LAB ORDERS": result})
        else:
            p = lorepo.LabOrderRepo.get(id)
            print(p)
<<<<<<< HEAD
            schema = s.LabOrderSchema()
=======
            schema = LabOrderSchema()
>>>>>>> c58233b8e9cf595e9ffbfefbe2dd0bbe261a1fcb
            print(schema)
       
        result = schema.dump(p)
    
        return result

    @staticmethod
    @parser.use_kwargs(s.LabOrderSchema, location="json_or_form")
    def post(**kwargs):
        """Create LabOrder using all of the incoming information"""
        lorepo.LabOrderRepo.create(**kwargs)
        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?

    @parser.use_kwargs(s.LabOrderSchema, location="json_or_form")
    def put(id, **kwargs):
        """Update any attribute of the LabOrder Model"""
        order = lorepo.LabOrderRepo.get(id)
        order.update(**kwargs)
        order.save()
        return {'Status': 'Complete!'}, 201
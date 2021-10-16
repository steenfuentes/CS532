"""
Define the REST verbs
"""
import json
from flask_restful import Resource
from flask.views import View, MethodView
from marshmallow.utils import EXCLUDE


# from api.src.repositories import PatientRepository
from api.src.schema import PatientSchema
from api.src.models.patient import Patient
from flask import request
from webargs.flaskparser import use_kwargs, parser


class PatientAPI(MethodView):

    def get(self):
        pass

    def post(self):
        """Create patient using all of the sent information"""
        schema = PatientSchema()
        data = request.get_json()
        print(data)
        schema.loads(data)

        return 201
    
    def put(self):
        pass

    def delete(self):
        pass

# class PatientResource(Resource):
#     """ Verbs that are relative to the users"""
    
#     @staticmethod
#     @use_kwargs(PatientSchema(), location="json")
#     def get(last_name, first_name):
#         """ Return a user based on the name"""
#         p = PatientRepository.get(last_name=last_name, first_name=first_name)
#         schema = PatientSchema()
#         result = schema.dump(p)

#         return result

#     @staticmethod
#     @use_kwargs(PatientSchema(), location="json")
#     def post(id, first_name, last_name, number, **kwargs):
#         """Create patient using all of the sent information"""
#         p = PatientRepository.create(id=id, first_name=first_name, last_name=last_name, number=number)
#         schema = PatientSchema()
#         result = schema.load(p)
        
#         return result, 201
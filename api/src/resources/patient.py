
from flask import jsonify, request
from flask_restful import Resource

from repositories import PatientRepository
# from util import parse_params             # Need to implement an arugment parser to implement REST verbs



# methods for accessing patient data and manipulating patient objects will go here
class PatientResource(Resource):
    pass
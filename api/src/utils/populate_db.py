import json
import inspect
from re import I, U
import sys, os
import random
from marshmallow.utils import pprint
import requests

# add app path 
sys.path.append(os.path.abspath(os.path.join('../../..')))

from api.src.models.laborder import TestType, LabOrderModel, LabOrderSchema
from api.src.models.physician import PhysicianSchema, PhysicianModel
from api.src.models.patient import PatientModel, PatientSchema

from api import db

patient_url = "http://127.0.0.1:5000/records/"
physician_url = "http://127.0.0.1:5000/physicians/"
laborder_url = "http://127.0.0.1:5000/laborder/"
mock_data = "api/src/utils/mock_data/"

# retrieve TestType enum attributes and put them into a list
attributes = inspect.getmembers(TestType, lambda a:not(inspect.isroutine(a)))
test_types = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))] # we get more than just test types
tests = test_types[0:15] # take only actual test types 
tests_len = len(tests) - 1

# load all mock data
with open(mock_data + 'patients.json') as patients:
    patient_data = json.load(patients)

with open(mock_data + 'physicians.json') as physicians:
    physician_data = json.load(physicians)

with open(mock_data+ 'lab_orders.json') as labs:
    labs_data = json.load(labs)


pcp_ids = []
pcp_id = 1 # assume first md will be assigned id of 1. Rewrite later to be more elegant
for md in physician_data:
    pcp_ids.append(pcp_id)
    pcp_id += 1
    schema = PhysicianSchema()
    result = schema.load(md)
    physician = PhysicianModel(**result)
    physician.save() 
    print("Added Dr.", md["last_name"], "to the physician table!\n")
    
patient_ids = []
patient_id = 1 # assume first patient will be assigned id of 1. Rewrite as stated above
for patient in patient_data:
    patient["pcp_id"] = pcp_ids[random.randrange(0,len(pcp_ids))]
    patient["medications"] = ""
    patient_ids.append(patient_id)
    patient_id += 1
    schema = PatientSchema()
    result = schema.load(patient)
    patientmodel = PatientModel(**result)
    patientmodel.save()
    print("Added patient:", patient["first_name"], patient["last_name"], "to the patient table!\n")

laborder_id = 1 # assume first lab order is 1. Rewrite "
for lab in labs_data:
    lab["test_type"] = tests[random.randrange(0,tests_len)]
    lab["physician_id"] = pcp_ids[random.randrange(0,len(pcp_ids)-1)]
    lab["patient_id"] = patient_ids[random.randrange(0,len(patient_ids)-1)]
    schema = LabOrderSchema()
    result = schema.load(lab)
    order = LabOrderModel(**result)
    order.save()
    print("Added lab order:", order.id , "to the lab order table!\n")
    laborder_id += 1
  
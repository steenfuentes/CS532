import json
import inspect
import sys, os
import random
import requests

# add app path 
sys.path.append(os.path.abspath(os.path.join('../..')))

from api.src.models.laborder import TestType
from api import db, create_app

app = create_app()
app.app_context().push()
db.create_all(app=create_app())


patient_url = "http://127.0.0.1:5000/records/"
physician_url = "http://127.0.0.1:5000/physicians/"
laborder_url = "http://127.0.0.1:5000/laborder/"

# retrieve TestType enum attributes and put them into a list
attributes = inspect.getmembers(TestType, lambda a:not(inspect.isroutine(a)))
test_types = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))] # we get more than just test types
tests = test_types[0:15] # take only actual test types 
tests_len = len(tests) - 1



# load all mock data
with open('mock_data/patients.json') as patients:
    patient_data = json.load(patients)

with open('mock_data/physicians.json') as physicians:
    physician_data = json.load(physicians)

with open('mock_data/lab_orders.json') as labs:
    labs_data = json.load(labs)


pcp_ids = []
for md in physician_data:
    pcp_ids.append(md["id"])
    response = requests.post(url=physician_url, data=md)
    if response.status_code == 201:
        print("Added Dr.", md["last_name"], "to the physician table!\n")
    else:
        print(response.text)

patient_ids = []
for patient in patient_data:
    patient["pcp_id"] = pcp_ids[random.randrange(0,len(pcp_ids))]
    patient_ids.append(patient["id"])
    response = requests.post(url=patient_url, data=patient)
    if response.status_code == 201:
        print("Added patient:", patient["first_name"], patient["last_name"], "to the patient table!\n")
    else:
        print(response.text)

for lab in labs_data:
    lab["test_type"] = tests[random.randrange(0,tests_len)]
    lab["physician_id"] = pcp_ids[random.randrange(0,len(pcp_ids)-1)]
    lab["patient_id"] = patient_ids[random.randrange(0,len(patient_ids)-1)]
    response = requests.post(url=laborder_url, data=lab)
    if response.status_code == 201:
        print("Added lab order:", lab["id"], "to the lab order table!\n")
    else:
        print(response.text)
  
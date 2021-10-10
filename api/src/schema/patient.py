from models.patient import Patient
from marshmallow import fields
from api import ma 

class PatientSchema(ma.ModelSchema):
    class Meta:
        model = Patient 

from marshmallow import fields
from api import ma
from api import db

from api.src.models.patient import Patient


class PatientSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Patient 
    
    email = fields.Email()
        

# Implement data processing and validation here
    

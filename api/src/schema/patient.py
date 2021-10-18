from marshmallow_sqlalchemy import load_instance_mixin
from api import ma
from api import db

from api.src.models.patient import Patient


class PatientSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Patient 
        load_instance = True
        sqla_session=db.session

# Implement data processing and validation here
    

from api import ma

from api.src.models.patient import Patient


class PatientSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Patient 

# Implement data processing and validation here
    

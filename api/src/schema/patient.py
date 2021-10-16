
from marshmallow.decorators import post_load
from webargs.core import _UNKNOWN_DEFAULT_PARAM
from api import ma
from marshmallow import fields

from api.src.models.patient import Patient


class PatientSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Patient 
        load_instance = True
        include_fk = True

        # @post_load
        # def make_patient(self, id, first_name, last_name, number, **kwargs):
        #     patient = Patient(id=id, first_name=first_name, last_name=last_name, number=number)
        #     return patient.save()


    

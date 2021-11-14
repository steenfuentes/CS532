"""
Define the REST verbs for an appointment
"""
from flask.views import MethodView
from flask import jsonify
from webargs.flaskparser import use_kwargs


from api.src.repositories.appointment import AppointmentRepo
from api.src.models.appointment import AppointmentModel, AppointmentSchema

class AppointmentAPI(MethodView):
    """ Verbs that are relative to a lab"""

    @staticmethod
    def get(id):
        """ Return Appointment based on the id.

            If no appointment id is provided, all appointments will be returned.
        """

        if id is None:
            p = AppointmentRepo.get_all()
            schema = AppointmentModel.Schema(many=True)
        else:
            p = AppointmentRepo.get(id)
            print(p)
            schema = AppointmentModel.Schema()
            print(schema)
       
        result = schema.dump(p)
    
        return result


    @staticmethod
    @use_kwargs(AppointmentSchema, location="form")
    def post(id,**kwargs):
        """Create Appointment using all of the incoming information"""

        AppointmentRepo.create(id=id,**kwargs)

        return {'Status': 'Complete!'}, 201 # Will return some sort of message back to confirm that a user has been created?


    @use_kwargs(AppointmentSchema, location="form")
    def put(id, **kwargs):
        """Update any attribute of the Appointment Model"""

        order = AppointmentRepo.get(id)
        order.update(**kwargs)
        order.save()

        return {'Status': 'Complete!'}, 201
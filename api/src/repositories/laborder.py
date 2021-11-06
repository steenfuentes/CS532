"""
Class that allows interaction with the lab order database model
"""
from api.src.models.laborder import LabOrderModel
from api.src.models.patient import PatientModel
from api.src.models.physician import PhysicianModel

class LabOrderRepo():

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result.
    # Implmentation should also suppport searching by any given attribute filter
    @staticmethod
    def get(id):
        """ Query a LabOrder by ID """
        return LabOrderModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the LabOrders in the database. Return a dictionary."""
        LabOrder_list = LabOrderModel.query.all()
        return LabOrder_list
    
    @staticmethod
    def create(id,**kwargs):
        """ Create a new LabOrder
            Must have a patient and physician associated upon creation    
        """
        # associated_physician = PhysicianModel.query.filter_by(id=physician_id).one()
        LabOrder = LabOrderModel(id=id, **kwargs)
        # LabOrder.append(associated_physician)
        if "patient_id" in kwargs:
            patient_id = kwargs.get("patient_id")
            associated_patient = PatientModel.query.filter_by(id=patient_id).one()
            print("Retrieving patient...")
            associated_patient.lab_orders.append(LabOrder)
            print("Lab order added to:", associated_patient.first_name, associated_patient.last_name)
            associated_patient.save()
        
        return LabOrder.save()
    
    def update(self, **kwargs):
        """ update any attribute of the lab order"""
        for key, value in kwargs.items():
            locals()[key] = value
        
        return self


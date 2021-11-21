"""
Class that allows interaction with the lab order database model
"""
from api.src.models.laborder import LabOrderModel
from api.src.models.patient import PatientModel
from api.src.models.physician import PhysicianModel

class LabOrderRepo():

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
        
        if "physician_id" in kwargs:
            physician_id = kwargs.get("physician_id")
            associated_md = PhysicianModel.query.filter_by(id=physician_id).one()
            associated_md.lab_orders.append(LabOrder)
            associated_md.save()
        
        return LabOrder.save()
    
    def update(self, **kwargs):
        """ update any attribute of the lab order"""
        for key, value in kwargs.items():
            locals()[key] = value
        
        return self


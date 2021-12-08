"""
Class that allows interaction with the lab order database model
"""

from api.src.models.patient import PatientModel
from api.src.models.pharmacyorder import PharmacyOrderModel
from api.src.models.physician import PhysicianModel

class PharmacyOrderRepo():

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result.
    # Implmentation should also suppport searching by any given attribute filter
    @staticmethod
    def get(id):
        """ Query a LabOrder by ID """
        return PharmacyOrderModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the LabOrders in the database. Return a dictionary."""
        LabOrder_list = PharmacyOrderModel.query.all()
        return LabOrder_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new LabOrder
            Must have a patient and physician associated upon creation    
        """
        # associated_physician = PhysicianModel.query.filter_by(id=physician_id).one()
        PharmacyOrder = PharmacyOrderModel(**kwargs)
        # LabOrder.append(associated_physician)
        if "patient_id" in kwargs:
            patient_id = kwargs.get("patient_id")
            associated_patient = PatientModel.query.filter_by(id=patient_id).one()
            print("Retrieving patient...")
            associated_patient.pharmacy_orders.append(PharmacyOrder)
            print("Pharmacy Order added to:", associated_patient.first_name, associated_patient.last_name)
            associated_patient.save()
        
        if "physician_id" in kwargs:
            physician_id = kwargs.get("physician_id")
            associated_md = PhysicianModel.query.filter_by(id=physician_id).one()
            associated_md.pharmacy_orders.append(PharmacyOrder)
            associated_md.save()
        
        return PharmacyOrder.save()
    
    def update(self, **kwargs):
        """ update any attribute of the lab order"""
        for key, value in kwargs.items():
            locals()[key] = value
        
        return self


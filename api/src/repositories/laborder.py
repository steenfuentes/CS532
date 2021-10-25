"""
Class that allows interaction with the lab order database model
"""
from api.src.models.laborder import LabOrderModel

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
    def create(**kwargs):
        """ Create a new LabOrder"""
        LabOrder = LabOrderModel(**kwargs)
        return LabOrder.save()
    
    def update(self,**kwargs):
        """ update any attribute of the user"""
        for key, value in kwargs.items():
            locals()[key] = value
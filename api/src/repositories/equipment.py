from api.src.models.equipment import EquipmentModel    
    
class EquipmentRepo:

    @staticmethod
    def get(id):
        """ Query a piece of equipment by id """

        return EquipmentModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all equipment. Return a dictionary."""

        patient_list = EquipmentModel.query.all()
        
        return patient_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new piece of equipment"""

        eq = EquipmentModel(**kwargs)

        return eq.save()
    
    def update(self,**kwargs):
        """ update any attribute of the user"""

        for key, value in kwargs.items():
            locals()[key] = value
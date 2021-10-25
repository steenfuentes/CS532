from api.src.models.medication import MedicationModel    
    
class MedicationRepo:

    @staticmethod
    def get(id):
        """ Query a piece of medication by id """
        return MedicationModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all medication. Return a dictionary."""
        patient_list = MedicationModel.query.all()
        return patient_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new piece of medication"""

        eq = MedicationModel(**kwargs)
        return eq.save()
    
    def update(self,**kwargs):
        """ update any attribute of the medication"""
        for key, value in kwargs.items():
            locals()[key] = value
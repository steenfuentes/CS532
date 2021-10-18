from api.src.models.patient import Patient

class PatientRepository:

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result.
    # Implmentation should also suppport searching by any given attribute filter
    @staticmethod
    def get(id):
        """ Query a patient by ID """
        return Patient.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the patients in the database. Return a dictionary."""
        patient_list = Patient.query.all()
        return patient_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new patient"""

        patient = Patient(**kwargs)

        return patient.save()
    
    def update(self,**kwargs):
        """ update any attribute of the user"""
        for key, value in kwargs.items():
            locals()[key] = value
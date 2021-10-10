from models.patient import Patient

class PatientRepository:

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result
    @staticmethod
    def get(last_name, first_name):
        """ Query a patient by last and first name """
        return Patient.query.filter_by(last_name=last_name, first_name=first_name).one_or_none()
    
    @staticmethod
    def create(self, id, first_name, last_name, number):
        """ Create a new patient"""
        patient = Patient(id=id, first_name=first_name, last_name=last_name, number=number)
        
        return patient.save()
       
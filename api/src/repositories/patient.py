from api.src.models.patient import PatientModel
from api.src.models.laborder import LabOrderModel
from api.src.models.physician import PhysicianModel

class PatientRepo():

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result.
    # Implmentation should also suppport searching by any given attribute filter
    @staticmethod
    def get(id):
        """ Query a patient by ID """
        return PatientModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the patients in the database. Return a dictionary."""
        patient_list = PatientModel.query.all()
        return patient_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new patient"""
        patient = PatientModel(**kwargs)
        return patient.save()
    

    def update(self, id, **kwargs):
        """ update any attribute of the user"""
        patient = self.get(id)
        for key, value in kwargs.items():
            setattr(patient, key, value)

        if "physician_id" in kwargs:
            physician_id = kwargs.get("physician_id")
            physician = PhysicianModel.get(id=physician_id)
            physician.patients.append(patient)

        return patient.save()
    
    
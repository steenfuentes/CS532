from api.src.models.physician import PhysicianModel

class PhysicianRepo():

    # Need to implement returning a list of results for the given search name. For now, this only returns a single result.
    # Implmentation should also suppport searching by any given attribute filter
    @staticmethod
    def get(id):
        """ Query a Physician by ID """
        return PhysicianModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the Physicians in the database. Return a dictionary."""
        Physician_list = PhysicianModel.query.all()
        return Physician_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new Physician"""
        Physician = PhysicianModel(**kwargs)
        return Physician.save()
    
    def update(self,**kwargs):
        """ update any attribute of the user"""
        for key, value in kwargs.items():
            locals()[key] = value
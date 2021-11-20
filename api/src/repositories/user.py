from api.src.models.user import UserModel

class UserRepo():
    
    @staticmethod
    def get(id):
        """ Query a User by ID """
        return UserModel.query.filter_by(id=id).one_or_none()

    @staticmethod
    def get_all():
        """ Query all the Users in the database. Return a dictionary."""
        print("Querying User table...")
        User_list = UserModel.query.all()

        return User_list
    
    @staticmethod
    def create(**kwargs):
        """ Create a new User"""
        User = UserModel(**kwargs)
        return User.save()
    
    def update(self, id, **kwargs):
        """ update any attribute of the user"""
        User = self.get(id)
        for key, value in kwargs.items():
            setattr(User, key, value)
        
        return User.save()
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI') 
    # at the moment it is 'sqlite:///site.db', but when using PostgreSQL, we would like to have this set as an environment variable since the stream will include login info
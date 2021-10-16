from flask import Flask
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from .config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow



db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app) 
    bcrypt.init_app(app)
    ma.init_app(app)

    from api.src.resources.patient import PatientAPI
    app.add_url_rule('/records/', view_func=PatientAPI.as_view('patient_api'))

    return app

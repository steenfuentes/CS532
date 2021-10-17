from flask import Flask
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from .config import Config

db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app) 
    bcrypt.init_app(app)
    ma.init_app(app)

    def register_api(view, endpoint, url, pk='id', pk_type='int'):
        """Easy Registration of Model API"""
        view_func = view.as_view(endpoint)
        app.add_url_rule(url, defaults={pk: None},
                        view_func=view_func, methods=['GET',])
        app.add_url_rule(url, view_func=view_func, methods=['POST',])
        app.add_url_rule(f'{url}<{pk_type}:{pk}>', view_func=view_func,
                        methods=['GET', 'PUT', 'DELETE'])

    from api.src.views.patient import PatientView
    register_api(PatientView, 'patient', '/records/', pk='id')

    return app

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

    # def register_api(view, endpoint, url, pk='id', pk_type='int'):
    #     """Easy Registration of Model API"""
    #     view_func = view.as_view(endpoint)
    #     app.add_url_rule(url, defaults={pk: None},
    #                     view_func=view_func, methods=['GET',])
    #     app.add_url_rule(url, view_func=view_func, methods=['POST',])
    #     app.add_url_rule(f'{url}<{pk_type}:{pk}>', view_func=view_func,
    #                     methods=['GET', 'PUT', 'DELETE'])
    
    from api.src.views.equipment import EquipmentAPI
    from api.src.views.laborder import LabOrderAPI
    from api.src.views.patient import PatientAPI
    from api.src.views.physician import PhysicianAPI

    equipment_view = EquipmentAPI.as_view('equipment_api')
    app.add_url_rule('/equipment/', defaults={'id': None}, view_func=equipment_view, methods=['GET'])
    app.add_url_rule('/equipment/', view_func=equipment_view, methods=['POST',])
    app.add_url_rule('/equipment/<int:id>', view_func=equipment_view, methods=['GET'])

    laborder_view = LabOrderAPI.as_view('laborder_api')
    app.add_url_rule('/laborder/', defaults={'id': None}, view_func=laborder_view, methods=['GET'])
    app.add_url_rule('/laborder/', view_func=laborder_view, methods=['POST',])
    app.add_url_rule('/laborder/<int:id>', view_func=laborder_view, methods=['GET'])
  
    patient_view = PatientAPI.as_view('patient_api')
    app.add_url_rule('/records/', defaults={'id': None}, view_func=patient_view, methods=['GET'])
    app.add_url_rule('/records/', view_func=patient_view, methods=['POST',])
    app.add_url_rule('/records/<int:id>', view_func=patient_view, methods=['GET'])

    physician_view = PhysicianAPI.as_view('physician_api')
    app.add_url_rule('/physicians/', defaults={'id': None}, view_func=physician_view, methods=['GET'])
    app.add_url_rule('/physicians/', view_func=physician_view, methods=['POST',])
    app.add_url_rule('/physicians/<int:id>', view_func=physician_view, methods=['GET'])
  

    
    return app

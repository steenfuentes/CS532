from re import I
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

from .config import DevelopmentConfig

db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()
cors = CORS()

def create_app(config_class=DevelopmentConfig):
    app = Flask(__name__)
    app.config.from_object(config_class) 
    
    db.init_app(app) 
    bcrypt.init_app(app)
    ma.init_app(app)
    cors.init_app(app, resources={r"/*": {"origins": "*"}})
    app.config['CORS_HEADERS'] = 'Content-Type'

    
    """ Add Resources and Rules for API Endpoints """
    from api.src.views.equipment import EquipmentAPI
    from api.src.views.laborder import LabOrderAPI
    from api.src.views.patient import PatientAPI
    from api.src.views.physician import PhysicianAPI
    from api.src.views.user import RegisterAPI, LoginAPI, LogoutAPI, UserProfileAPI

    equipment_view = EquipmentAPI.as_view('equipment_api')
    app.add_url_rule('/equipment/', defaults={'id': None}, view_func=equipment_view, methods=['GET'])
    app.add_url_rule('/equipment/', view_func=equipment_view, methods=['POST',])
    app.add_url_rule('/equipment/<int:id>', view_func=equipment_view, methods=['GET'])

    laborder_view = LabOrderAPI.as_view('laborder_api')
    app.add_url_rule('/laborder/', defaults={'id': None}, view_func=laborder_view, methods=['GET','PUT','DELETE'])
    app.add_url_rule('/laborder/', view_func=laborder_view, methods=['POST',])
    app.add_url_rule('/laborder/<int:id>', view_func=laborder_view, methods=['GET', 'PUT', 'DELETE'])
  
    patient_view = PatientAPI.as_view('patient_api')
    app.add_url_rule('/records/', defaults={'id': None}, view_func=patient_view, methods=['GET'])
    app.add_url_rule('/records/', view_func=patient_view, methods=['POST','PUT'])
    app.add_url_rule('/records/<int:id>', view_func=patient_view, methods=['GET'])

    physician_view = PhysicianAPI.as_view('physician_api')
    app.add_url_rule('/physicians/', defaults={'id': None}, view_func=physician_view, methods=['GET'])
    app.add_url_rule('/physicians/', view_func=physician_view, methods=['POST',])
    app.add_url_rule('/physicians/<int:id>', view_func=physician_view, methods=['GET'])

    # routes relative to user creation, login, logout
    register_view = RegisterAPI.as_view('register_api')
    app.add_url_rule('/admin/registeruser', view_func=register_view, methods=['POST'])

    login_view = LoginAPI.as_view('login_api')
    app.add_url_rule('/login/', view_func=login_view, methods=['POST'])
    
    logout_view = LogoutAPI.as_view('logout_api')
    app.add_url_rule('/dashboard/logout/', view_func=logout_view, methods=['POST'])

    userprofile_view = UserProfileAPI.as_view('userprofile_api')
    app.add_url_rule('/profile/', view_func=userprofile_view, methods=['PUT'])
  
    return app

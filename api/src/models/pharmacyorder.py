"""
Defines a model for a pharmacy order 
"""
from flask_sqlalchemy.utils import parse_version
from api import db
from models.patient import PatientModel

class PharmacyOrderModel(db.Model):
    """ id
    patient
    physicianmedications, dosages, pharmacist, order_date, filled_date, pickup_date
    """
    pass
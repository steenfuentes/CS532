from operator import eq
from marshmallow import Schema
from marshmallow import fields
from marshmallow.fields import Email

from api import db
from .abstractmodel import BaseModel, MetaBaseModel


class Department(enum.Enum):
    MD = "Medical Department"
    LD = "Lab Department"
    PD = "Pharmacy Department"
    AD = "Admin Department"



class EquipmentModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'equipmentmodel'

    id = db.Column(db.Integer, primary_key=True)
    equipment_type = db.Column(db.String(20), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    department = db.Column(db.Enum(Department), nullable=False)    #enumerated
    own = db.Column(db.Boolean, unique=False, nullable=False)
    purchase_date = db.Column(db.Date, nullable=False)

    def __init__(self, id, equipment_type, description, department, own, purchase_date):
        self.id = id
        self.equipment_type = equipment_type
        self.description = description
        self.department = department
        self.own = own
        self.purchase_date = purchase_date

class EquipmentSchema(Schema):
    id = fields.Integer()
    equipment_type = fields.String()
    description = fields.String()
    department = fields.String()
    own = fields.Boolean()
    purchase_date = fields.Date()


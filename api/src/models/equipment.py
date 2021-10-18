from enum import unique

from marshmallow.fields import Email
from api import db
from .abstractmodel import BaseModel, MetaBaseModel

# just outlining the basic info needed that defines a patient
# a more elegent approach will establish patients as objects in the system
class Equipment(db.Model, BaseModel, metaclass=MetaBaseModel):
    __tablename__ = 'equipment'

    id = db.Column(db.Integer, primary_key=True)
    etype = db.Column(db.String(20), unique=False, nullable=False)
    edescription = db.Column(db.String(200), unique=False, nullable=False)
    department = db.Column(db.String(30), unique=False, nullable=False)
    own = db.Column(db.Boolean, unique=False, nullable=False)
    pdate = db.Column(db.Date)



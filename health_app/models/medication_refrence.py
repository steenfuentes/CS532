from health_app import db
from flask import current_app

#enumerate marketing status
class mkt_status(enum.Enum):
    Discontinued = "Discontinued"
    OTC = "Over-the-counter"
    Prescription = "Prescription"
    Notavail = "None (Tentative Approval)"

# just outlining the basic info needed that defines a medication 
# a more elegent approach will establish patients as objects in the system
class medication_reference(db.Model):
    __tablename__ = 'medication_reference'
    id = db.Column(db.Integer, primary_key=True)
    brand_name = db.Column(db.String(64), unique=False, nullable=False)
    reference_standard = db.Column(db.String(64), unique=False, nullable=False)
    dosage_form = db.Column(db.String(64), unique=False, nullable=False)
    route = db.Column(db.String(64), unique=False, nullable=False)
    marketing_status = db.Column(db.Enum(mkt_status))
    
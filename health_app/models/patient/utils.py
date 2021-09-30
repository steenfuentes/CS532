
from flask.blueprints import Blueprint

from flask import render_template, url_for, flash, request, Blueprint

patient = Blueprint('patient', __name__)

# methods for accessing patient data and manipulating patient objects will go here
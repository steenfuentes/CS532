# any methods that will be used for logging on, user authentication, password recovery, etc. will go here
from flask import Blueprint

users = Blueprint('users', __name__)
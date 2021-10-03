# Registration Form that will be used by system admins to register a new user into the system
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.fields.core import BooleanField
from wtforms.fields.simple import PasswordField
from wtforms.validators import DataRequired, Email, EqualTo, Length

class RegistrationForm(FlaskForm):
    username = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8)])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    # access_level = This will be a custom field that will set the access level of the user upon registration
    submit = SubmitField('Register User')


# Login form to be displayed before entry into the main application system
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Email()]) #username will be the users work email
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

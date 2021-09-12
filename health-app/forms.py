from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

class CalculatorForm(FlaskForm):
    input = StringField('Modified or Unmodified Sequence:', validators=[DataRequired(),
                                                Length(min=2, max=50)])
    submit = SubmitField('Calculate')

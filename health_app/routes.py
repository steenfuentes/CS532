from flask import render_template, url_for, flash, request
from app import app
from health_app.forms import Form

from health_app.models import Mod

some_function = [
        {
            'function': "Function Output",
            'display': "Telling you what to do"

         }
]

# this decorator and method creates URL path that renders html from \templates
@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', some_function=some_function)


@app.route("/about")
def about():
    return render_template('about.html', title='About')




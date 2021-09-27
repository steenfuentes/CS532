from flask import render_template, url_for, flash, request
from health_app import app, forms
# from health_app.forms import Form

# from health_app.models import Mod

some_function = [
        {
            'function': "A call to a function",
            'display': "Function Testing. NOTE: The bootstrap css files are dictating the styling. Should we build our own?"

         }
]

# this decorator and method creates URL path that renders html from \templates
@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/sched")
def sched():
    return render_template('sched.html', title='Scheduler', some_function=some_function)


@app.route("/records")
def records():
    return render_template('records.html', title='', forms=forms)

@app.route("/labs")
def labs():
    return render_template('labs.html', title='')

@app.route("/pharm")
def pharm():
    return render_template('pharm.html', title='')

@app.route("/billing")
def billing():
    return render_template('billing.html', title='')

@app.route("/equipment")
def equipment():
    return render_template('equipment.html', title='')
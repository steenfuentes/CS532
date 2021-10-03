from flask import render_template, url_for, flash, request, Blueprint

main = Blueprint('main', __name__)

some_function = [
        {
            'function': "A call to a function",
            'display': "Function Testing. NOTE: The bootstrap css files are dictating the styling. Should we build our own?"

         }
]

# this decorator and method creates URL path that renders html from \templates
@main.route("/")
@main.route("/home")
def home():
    return render_template('home.html')

@main.route("/records")
def records():
    return render_template('records.html', title='')
    
@main.route("/sched")
def sched():
    return render_template('sched.html', title='Scheduler', some_function=some_function)

@main.route("/labs")
def labs():
    return render_template('labs.html', title='')

@main.route("/pharm")
def pharm():
    return render_template('pharm.html', title='')

@main.route("/billing")
def billing():
    return render_template('billing.html', title='')

@main.route("/equipment")
def equipment():
    return render_template('equipment.html', title='')
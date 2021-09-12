from flask import render_template, url_for, flash, request
from CalculatorApp import app
from CalculatorApp.forms import CalculatorForm
import CalculatorApp.Calculator as cc
from CalculatorApp.models import Mod

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

@app.route("/calculate", methods=['GET', 'POST'])
def calculate():
    form = CalculatorForm()
    results = {}
    if form.validate_on_submit():
        if request.method == 'POST':

            seq = request.form['input']
            mw = cc.mw(seq)
            results['Molecular Weight'] = mw
            ec = cc.ec_seq(seq)
            results['Extinction Coefficient'] = ec
            flash('Calculated!', 'success')
    return render_template('calculate.html', title='Calculate', form=form, results=results)



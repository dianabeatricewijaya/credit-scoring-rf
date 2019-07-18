import os
from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for
import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        data = request.form
        agama = data['agama']
        req_principal = data['req_principal']
        period = data['period']
        gender = data['gender']
        grad = data['grad']
        length_emp = data['length_emp']
        genderRef = data['genderRef']
        gross_sal = data['gross_sal']
        residence = data['residence']
        marital = data['marital']
        family = data['family']
        job = data['job']
        business = data['business']
        ref_rel = data['ref_rel']
        age = data['age']

        if not agama or not req_principal or not period or not gender or not grad or not length_emp or not genderRef or not gross_sal or not residence or not marital or not family or not job or not business or not ref_rel or not age:
            return render_template("error.html", title="Error", message="Please ensure the form is fully completed before submitting")
        else:
            x = np.array([[agama, req_principal, period, gender, grad,length_emp, genderRef,gross_sal, residence, marital,family, job, business, ref_rel, age]])
            
            model = pickle.load(open("model/model-credit.sav", 'rb'))

            result = model.predict(x)
            probability = model.predict_proba(x)
            survival_proba = round((probability[0][1] * 100), 2) 

            if int(result[0]) == 1:
                message = "LAYAK"
            else:
                message = "TIDAK LAYAK"
                
            return render_template("result.html", survival_proba=survival_proba, result=result, message=message)
    else:
        return render_template("index.html")


@app.route("/analysis", methods=['GET'])
def analysis():
    return render_template("analysis.html")

if __name__ == '__main__':
    app.run()
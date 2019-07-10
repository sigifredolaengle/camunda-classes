from flask import Flask, request, render_template, json
import requests
app = Flask(__name__)

businessKey = 0

@app.route('/', methods=['GET', 'POST'])
def main():
    global businessKey

    if request.method == 'POST':
        businessKey += 1
        camundaServer = request.form['server']

        variables = {
            'name': {'value': request.form['name'], 'type': 'String'},
            'age': {'value': request.form['age'], 'type': 'Integer'},
            'email': {'value': request.form['email'], 'type': 'String'},
            'manufacturer': {'value': request.form['manufacturer'], 'type': 'String'},
            'cartype': {'value': request.form['cartype'], 'type': 'String'},
            'sex': {'value': request.form['sex'], 'type': 'String'},
            'price': {'value': request.form['price'], 'type': 'Integer'}
        }

        packet = {
            'variables': variables,
            'businessKey': businessKey
        }

        data = json.dumps(packet)
        headers = {'content-type': 'application/json'}

        res = requests.post(camundaServer, headers=headers, data=data)
        print(res)


    return render_template('interfaz.html')



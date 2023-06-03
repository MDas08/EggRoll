from flask import Flask
from info import *

app = Flask(__name__)

@app.route('/')
def index():
    information = getInfo("Food")
    return information

if __name__ == '__main__':
   app.run(debug=True, port=5000)
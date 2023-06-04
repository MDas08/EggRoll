from flask import Flask, request
from info import *
from hello import *
from audiototext import *

app = Flask(__name__)

@app.route('/form', methods=["POST"], strict_slashes=False)
def index():
    file = request.files['file']
    text = getText(file)
    #text = "The president of India (IAST: Bhārat kē Rāṣṭrapati) is the head of state of the Republic of India. The president is the nominal head of the executive,[a] the first citizen of the country, as well as the commander-in-chief of the Indian Armed Forces. Droupadi Murmu is the 15th and current president, having taken office from 25 July 2022. "
    words = getKeywordsFromText(text)
    information = getInfo(words)
    return information


if __name__ == '__main__':
   app.run(debug=True)
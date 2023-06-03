import requests
import json

S = requests.Session()

def getInfo(title):
    #title = "Food"
    URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+title
    R = S.get(url=URL)
    DATA = R.json()
    if "-1" in DATA['query']['pages']:
        return title
    else:
        return DATA

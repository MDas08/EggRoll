import requests
#import json

S = requests.Session()

def getInfo(words):
    notes =""
    for title in words:
        URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+title
        R = S.get(url=URL)
        DATA = R.json()
        if "-1" in DATA['query']['pages']:
            notes+= title+"BARBIETHEMOVIEBARBIETHEMOVIE"
        else:
            #notes+= title+"\n"
            pageid = list(DATA["query"]["pages"].keys())[0]
            #extractkey = list(DATA["query"]["pages"][pageid].keys())[0]
            notes+= title+"BARBIETHEMOVIE"+ DATA["query"]["pages"][pageid]['extract'] +"BARBIETHEMOVIEBARBIETHEMOVIE"
            #notes+= title+"\n"+ DATA["query"]["pages"][pageid][extractkey] +"\n"
    notes = notes.replace("BARBIETHEMOVIE", "<br/>")
    return notes

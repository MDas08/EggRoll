#import nltk
import re
from rake_nltk import Rake

#nltk.download('punkt')
def getKeywordsFromText(text):
    #text = "Hello, Hello, Hello"
    #text = "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes. These topics are represented in modern mathematics with the major subdisciplines of number theory,[1] algebra,[2] geometry,[1] and analysis,[3][4] respectively. There is no general consensus among mathematicians about a common definition for their academic discipline. "
    text = re.sub(r"[^a-zA-Z ']", "", text)
    rake_nltk_var = Rake(max_length=3,include_repeated_phrases=False)
    rake_nltk_var.extract_keywords_from_text(text)
    words = rake_nltk_var.get_ranked_phrases()
    for i in words:
        i = i.replace(' ', '%20')
    return words

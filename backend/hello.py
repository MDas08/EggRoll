import nltk
from rake_nltk import Rake

#nltk.download('punkt')
rake_nltk_var = Rake()
text = "Reactjs is one of the best frontend libraries for building frontend single-page applications. It is been developed and maintained by Facebook with a large community. Flask is a backend micro-framework written in python for the rapid development process. It is famous for its simplicity and independence. It does not need any external library for working, which makes it beginner-friendly and many people choose this framework. Flask is generally used for building a REST API. To know more about how you can build REST API in flask please refer to this article. "
rake_nltk_var.extract_keywords_from_text(text)
words = rake_nltk_var.get_ranked_phrases()
print(words)
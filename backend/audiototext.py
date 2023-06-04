import speech_recognition as sr
# r=sr.Recognizer()
# with sr.Microphone() as source:
#     print("Listening...")
#     audio = r.listen(source)
# try:
#     text=r.recognize_google(audio)
#     print("The Text:", text)
# except:
#     print('No audio')
def getText(audio):
    try:
        r=sr.Recognizer()
        text=r.recognize_google(audio)
        return text
    except:
        print('No audio')

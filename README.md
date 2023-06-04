# EggRoll
## Inspiration
We're 4 college students who have been through some tough classes, so we wanted to make a website that makes them easier for us. Often we'll have days that we just don't feel like making notes or the teacher is going too fast for us. So we created **EggRoll** to make the notes for us. 

## What it does
During a lecture the user just has to click record and once they've got the desired audio they can stop the recording. On downloading the audio they can submit it on the website and just wait a couple of moments while the notes generate.

EggRoll will record your lecture, identify keywords and then gives you information on the keywords by using an API.

## How we built it
We built the frontend using React, HTML, CSS and JS. It records the audio and sends it to the backend
The backend uses a Flask server where we convert the audio to text (using SpeechRecognition), then identify keywords (using rake-nltk) and then get information on the keywords using Wikipedia API.

## Challenges we ran into
Most of the team is composed of first timers so everything was new for us. We had to learn Flask and React for the first time. The biggest challenge however was connecting the backend to the frontend. We did this with an MLH mentor's help (Discord: 404_Not_Found#2073). Unfortunately we still couldn't get it to work. 

## Accomplishments that we're proud of
Honestly? Getting this project to somewhat work. This the first time we've done something like this, so just being able call this code our own and grinding up till the end is our biggest victory.

## What we learned
That just because we've never done something before doesn't mean we aren't capable of it. (Also Flask, React, basics of NLP, some regex, how great we work together).

## What's next for EggRoll
Fine-tuning the project and making sure we get those extra features in and all the errors out! Making sure the code is clean and maybe even deploy it. The team is coming back for WaffleHacks so we'll start learning new tech and make sure we win!

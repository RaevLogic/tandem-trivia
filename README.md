# Tandem Trivia

## Welcome!
This is a small trivia application made for my application to the Tandem Software Engineering Apprenticeship Program. Thank you for visiting and checking out my work. Vue is a new framework I've started working with recently, so I thought it would be interesting to try my hand at this app with it.

## Quick Start
I aim to describe this process as simple as possible.

Versions of tools used within the repo:
- Nodejsv12.18.0 (at least +10)
- npm@6.14.8
- git@2.25.1
```
# Install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```
## How To Play!
Would be silly if I didn't explain how to play! Once you've started up the development server with `npm run serve`, you can bring up the application in your browser via localhost:8080. Ten random questions are selected from a pool of twenty one at the start of the game. Read the question and click on the answer you think is correct. The answer boxes will immediately color to show the correct answer (green) and the incorrect answers (red).

Only after clicking an answer will you be able to click the next button to move on to the next question. Continue through the next nine questions in the same manner. Once you have answered all ten questions, your final score will be revealed and you may restart the game to try for a better score!

If you managed to figure out all the answers for the current set of questions, simply reload the application in your browser to generate a new random set of ten questions for the game.

## Things I Didn't Have Time To Add
- Unit Testing: Obviously this was the challenge portion of the application, and also an important part of any application. While I'm relatively confident with a small app like this that I've run through it enough times to be sure the core functionality is good to go, that doesn't do anything for the confidence of any other developer to roam around my code base or try to find a bug later on down the road after a few upgrades.
- Componentization: The part of the beauty of frameworks like Vue and React are the ability to break down an application into components. Much like breaking a complex problem into smaller bits can help us find an overall solution by solving the small problems first, breaking down an app into components lets us organize our infastructure much more neatly, makes testing and debugging easier, and is overall just better to see how the app works compared to huge monolithic apps in my opinion. I wanted to keep this app simple from the start since I knew I didn't have a lot of time this week. Writing the majority of the code into the App component works here with how small the app is with no complex routing and state management. However, it was getting annoying towards the end with all the CSS piling up.
- New Random Questions on Game Restart: I actually considered having a new set of ten random questions everytime you hit the Restart button. But I think this is more of a user preference feature which is subjective. If this were a study app rather than a trivia app for instance, I think using the same questions until you've memorized the answers before you get a new set is preferable.
- Backend: I'm generally more of a backend guy, but wanted to try Vue since I'm learning it for a customer anyway. Adding a small REST API with AWS Lambdas and DynamoDB to store and retrieve trivia questions would have been more interesting than just grabbing the JSON file from assets. Since we're pretending this is for a work environment, I could also store and retrieve user profiles, keeping track of everyone's high scores for bragging rights lol.

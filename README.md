# EF EnglishLive Coding Challenge - Simple Quiz

## Overview
Thank you for interviewing at EF and taking the time to carry out this coding challenge.

EF is all about education. So in this coding challenge we are looking to build a basic web application that renders some quiz questions that a user could run through.

Your challenge is to improve the look and feel of this application so that a user:
- can see some quiz questions rendered in a clear way
- can select one of the possible answers for each question
- can see their result at the end of the quiz

We would like you to take 2-3 hours to complete the exercise. Don't worry if you don't finish all of the items above, just do what you can in the time.

Before you submit, please write down in the `NOTES.md` file how much time you took, and any other notes that you would like us to read.

## Implementation details
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The entry point for the application is `src/App.js`.

We have created a file to help you get started - If you open `src/components/Quiz.js` you will see that we make a `GET` request to `https://opentdb.com/api.php?amount=10&category=32` to fetch some quiz questions. They are currently rendered into the page as stringified JSON.

The goal is to take the data returned from this api request and render a nice looking quiz.

Please feel free to refactor the app as much as you like. You are also free to introduce new `node_modules`. We  want you to spend your time:
- refactoring the code base
- building react components
- styling the page
  
If you would like to write test specs, this would also be a valid use of your time but not a requirement.

This challenge is quite open so that you can take it in the direction that best shows off your skills. That said, we do **not** want you to spend time on:

* Changing how the application is bundled and run,
* Setting up a new linter,
* introducing unnecessary node_modules like redux or redux-saga
* "Over-styling" the application

## Getting started

run `npm install` followed by `npm start` and open [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




# Would you rather project description

This is an "Would you rather" game app. Contains the next features :  
* User login - user is able to login with one of predefined users from the list
* Home - list of answered and unanswered polls which user can switch between. Unanswered polls displayed by default
* New question - user is able to add new question to question list
* Question details - if question wasn't answered by user, he is able to answer the poll and then redirected to question details page which displays the results. If question was answered then he sees the results of given poll
* Leader board - the board which displays users ordered by questions that were created/answered by user

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all project dependencies with `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Backend Server

 Methods:
* [`getInitialData`](#getInitialData)
* [`saveQuestionAnswer`](#saveQuestionAnswer)
* [`saveQuestion`](#saveQuestion)

## Important
The backend API uses a fixed set of cached results (questions and users).

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
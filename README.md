# Bobapedia Client

## Live Link: [Bobapedia](https://bobapedia-client.now.sh/)

## API Repo Link: [Api Repo](https://github.com/jayelaguardia/bobapedia-server)

### Summary

Bobapedia is a collection of bubble (or boba) tea recipes. The Classic page is where you'll find the "top" 15 bubble teas. Clicking on one will direct you to the recipe to make that tea. The Creation page is where you can make your own tea recipe as well as view other teas made by other users. You can also update or delete the teas you have made. However, you must have an account to view or use this page. Please use the register tab to make an account or login if you've already made one.

### Tech Stacks

- React
- Javascript
- HTML5
- CSS3
- Zeit

## Screenshots
  The classic tea page where the "top" 15 teas are displayed
  ![Classic Tea Page](classicPage.PNG)
  After clicking on a tea, this recipe card will show with the correct fields to make that tea
  ![ClassicID Tea Recipe Page](classicID.PNG)

## API Documentation

**Authentication** <br>
The endpoints related to creation tea are protected while the ones for classic, login, and registration are not. Simply register and login and you will have the authentication to access creation tea.

**Endpoints**
+ `/registration`
  - Accepts a json object of username and password and adds it into the user database <br>
+ `/login`
  - Accepts a json object of username and password
  - Responds with an auth token for the user's current logged in session <br>
+ `/classic`
  - get. Responds with an array of the "top" 15 tea objects with their fields <br>
+ `/classic/:classicID`
  - get. Responds with one specific classicc tea object with its corresponding fields <br>
+ `/creation`
  - get. Responds with an array of all user created tea objects and its fields. Authentication required
  - post. Accepts a json tea object with every field name required. Null values okay. Adds the tea object into the creation tea database. Authentication required. Responds with 201 if successful <br>
+ `/creation/:creationID`
  - get. Responds with one specific creation tea object with its corresponding fields. Authentication required
  - delete. Responds with 204 if successful. Authentication required
  - patch. Accepts a json tea object with every updated field required. Authentication required. Responds with 204 if successful

# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

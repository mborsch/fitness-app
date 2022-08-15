Live App: https://icofitness.netlify.app/

This app was built using React, RapidAPI, MaterialUI, and deployed with Netlify.

Features:
1. Ability to search for exercises:
![searchExercises](https://user-images.githubusercontent.com/99302602/184575152-c0f264cc-e340-43e8-a151-38680166aa39.png)

Utilizing the React State Hook and an async search function, users are able to search and find exercises based on exercise name, target muscle, equipment, or body
part. Each returned exercise will display in cards up to 9 per page, which include a gif of the exercise movement, the target body part, and the target muscle. The
cards are clickable, allowing the user to click on an exercise to view more details. 


2. Ability to filter exercises by muscle group:
![musclefilter](https://user-images.githubusercontent.com/99302602/184575228-5623386b-e98e-4619-8ead-edf8b83e1107.png)

This is a horizontal scroll wheel which utilizes react-horizontal-scrolling-menu. The options are displayed as cards, with icons for each filtering option. 
When clicked, exercises will be filtered by the option, and only display those exercises which satisfy the filter (and search if search is active).


3. Ability to click on an exercise, see exercise details, find example videos for the exercise, and find similar exercises grouped by muscle group and equipment:
 
 
![exercisedetails](https://user-images.githubusercontent.com/99302602/184575290-9bad1403-8c6e-4d94-897d-802b7287a30e.png)

When a user clicks on an exercise card, they are linked to '/exercise/:exerciseId'. Utilizing React State and Effect Hooks, as well as Params, API calls are made to
load exercise data, related video data, and similar exercises data. 




#Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

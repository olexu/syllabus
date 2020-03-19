This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

-   `yarn start` Runs the app in the development mode.
-   `yarn test` Launches the test runner in the interactive watch mode.
-   `yarn build` Builds the app for production to the `build` folder.

## Folder Structure

Inspired by: [react-redux-architecture](https://github.com/codeBelt/react-redux-architecture/tree/ts/arrows) ([My Awesome React/Redux Structure](https://medium.com/better-programming/my-awesome-react-redux-structure-6044e5007e22))

-   **constants**: Static data that doesn�t change
-   **environments**: API endpoints, static info that might change in different environments
-   **models**: Shared models/interfaces
-   **selectors**: Business logic code, models/interfaces generated for views
-   **stores**:
    -   **models**: API related models
    -   **actions**: Events to trigger application changes
    -   **effects**: Handles APIs and sanitizes response data
    -   **reducers**: Adds/removes/edits data from the global store
-   **utilities**: Helper code, abstract code to prevent duplication
-   **views**: All view components

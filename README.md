
# Rick and Morty Character Viewer

This project is a single-page application built with React to view characters from the Rick and Morty series.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Set Up](#set-up)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)
- [Routing](#routing)
- [Styling](#styling)
- [Testing](#testing)
- [Author](#author)

## Overview

Rick and Morty Character Viewer is an application designed to browse and view details of characters from the Rick and Morty series. The project demonstrates the use of React for building SPAs, along with routing, state management, and testing.

## Technologies Used

### Languages
- JavaScript
- Sass (Syntactically Awesome Style Sheets)

### Frontend
- React
  - react-dom
  - react-router-dom
  - react-parallax

### Testing
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event
- Cypress
- Web Vitals

### Build Tools
- react-scripts

### Others
- ESLint
- Browserslist

## Set Up

To set up the project locally, follow these steps:

1. **Fork and Clone the Repository:**
   - Fork the repository to your own GitHub account.
   - Clone the forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/rick-and-morty-viewer.git
   cd rick-and-morty-viewer
   ```

2. **Install Dependencies:**
   - Run `npm install` to install all required dependencies.

   ```bash
   npm install
   ```

3. **Start the Development Server:**
   - Run `npm start` to start the React development server.

   ```bash
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Structure

The project follows a modular file structure to ensure maintainability and scalability.

## Components

### App
The root component that sets up routing and renders other components.

### CharacterList
Displays a list of characters fetched from the API.

### CharacterDetail
Displays detailed information about a selected character.

### Header and Footer
Presentational components for layout.

## State Management

State is managed using the `useState` and `useEffect` hooks in functional components. Props are used to pass data and callbacks between components.

## Routing

Routing is implemented using react-router-dom to navigate between the character list and character detail views.

## Styling

Styling is done using Sass, and react-parallax is used for visual effects.

## Testing

Testing is done using @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, and Cypress.

Feel free to reach out with any questions or feedback!

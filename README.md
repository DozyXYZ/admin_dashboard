# Introduction
`admin_dashboard` is a MERN stack project. I created this project to practice full-stack development, JavaScript, web design, and deployment on Docker Desktop.

## ad_server
`ad_server` is a backend server application built with Node.js and Express. It uses MongoDB as its database and includes various middleware for environment configuration and security. This server is created based on MVC Framework. I learnt about Mongo data modelling and aggregate function to query data faster.

### Structure
- **controllers/**: Contains controller functions that handle incoming requests and interact with the models.
- **models/**: Contains Mongoose models that define the schema for the MongoDB collections used in the application.
- **routes/**: Contains route definitions that map HTTP requests to the appropriate controller functions.
- **data/**: Contain the mock data of the project
- **index.js**: The entry point of the server application, setting up the Express app and connecting to the MongoDB database.

### Main Dependencies
**body-parser**: Middleware for parsing request bodies.  
**cors**: Middleware for enabling Cross-Origin Resource Sharing.  
**country-iso-2-to-3**: Utility for converting country ISO codes.  
**dotenv**: Loads environment variables from a `.env` file.  
**express**: Web framework for Node.js.  
**helmet**: Security middleware for HTTP headers.  
**mongoose**: MongoDB object modeling tool.  
**morgan**: HTTP request logger middleware.  
**nodemon**: Utility for automatically restarting the server during development.  

## ad_client
`ad_client` is a React-based application designed for managing and displaying administration data. It utilizes Material UI for styling and layout, Redux for state management, and Nivo and Material for data visualization. I learnt to layout the page with box and theme color, light mode with state management, and design various endpoints for different purposes.

### Structure
- **src/assets/**: Contains mock user profile picture.
- **src/components/**: Contains reusable components for design.
- **src/scenes/**: Contains configuration for all the project pages.
- **src/state/**: Contains API configuration, endpoints, hooks in `api.js`. Contain global state management for "light" and "dark" mode in `index.js`.
- **App.js**: Sets up the main structure of the application with theming, routing, and state management.
- **index.css**: Sets up global styles.
- **index.js**: Sets up the entry point for the application.
- **theme.js**: Defines theme settings using Material-UI.

### Main Dependencies
**@emotion/react**: Library for writing CSS styles with JavaScript.  
**@emotion/styled**: Styled components for Emotion.  
**@mui/icons-material**: Material Design icons for MUI.  
**@mui/material**: Material-UI components for React.  
**@mui/x-data-grid**: Data grid component for MUI.  
**@nivo/core & charts**: Core and chart components for Nivo charts.  
**@reduxjs/toolkit**: Toolkit for efficient Redux development.  
**react-datepicker**: Datepicker component for React.  
**react-dom**: Entry point for React DOM rendering.  
**react-redux**: Official React bindings for Redux.  
**react-router-dom**: DOM bindings for React Router. 

# Usage
## Prerequisites
- Node.js (version 14 or higher)
- npm (version 5.6 or higher)
- MongoDB online cluster

## Server Preparation
1. Clone the repository:
   ```
   git clone https://github.com/DozyXYZ/admin_dashboard.git
   ```
2. In the project directory, navigate to the server folder:
   ```
   cd ad_server
   ```
3. Install dependencies:
   ```
   npm i
   ```
4. Create a `.env` file in the root directory of `ad_server` and add your MongoDB connection string (the string can be difference)
   ```
   MONGO_URL="mongodb+srv://<database_username>:<password>@trial.ljhqm.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Trial"
   PORT=<PORT_NUMBER>
   ```
5. Uncomment the comments in the "MONGOOSE CONNECTION" part in the `index.js` file in the main folder
6. Start the server, the first start will upload the data to your MongoDB database, you have to this only once
   ```
   npm run dev
   ```
7. Comment out the line in the "MONGOOSE CONNECTION", save the file to reload the server.
8. The database and server is ready.

## Client Preparation
1. Open a new terminal and navigate to the client folder from the server folder:
   ```
   cd ..
   cd ad_client
   ```
2. Install dependencies:
   ```
   npm i --legacy-peer-deps
   ```
3. Create a `.env.local` file in the root directory of `ad_client` and add in the following line. The port number should match with the one in the `.env` of the server side:
   ```
   REACT_APP_BASE_URL=http://localhost:<PORT_NUMBER>
   ```
4. Start the client application:
   ```
   npm run start
   ```
5. The app is loaded to the browser after compiling.

# Docker Desktop (Optional)
If you have Docker Desktop, you can deploy the project there.

**Note**: Change the ports in the `ad_server` service in `docker-compose.yml` file to the port you put in ad_server/.env file.

In the root directory of the project, run the command:
   ```
   docker-compose -f docker-compose.yml up --build
   ```
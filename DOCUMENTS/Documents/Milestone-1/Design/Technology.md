### React is our selected web framwork; below is a guide into how to set up a react app. 
Setting up a React app is a great way to start building modern web applications. React is a popular JavaScript library for creating user interfaces. Here's a step-by-step guide to help you set up a basic React app:

#### Prerequisites:

1. #### Node.js and npm: 
Make sure you have Node.js (which includes npm, the Node Package Manager) installed on your system. You can download it from the official Node.js website: https://nodejs.org/

#### Step 1: Create a New React App

1. #### Using Create React App:
The easiest way to set up a new React app is by using create-react-app, a tool that sets up a new project with all the necessary configuration preconfigured.
Open your terminal(this can be the VSCode terminal) and run the following command to create a new React app:

    npx create-react-app your-app-name

Replace your-app-name with the desired name of your app.

2. #### Navigate to the App Directory:
After the app is created, navigate to the app directory and open the app in VSCode using the following commands:

    cd your-app-name
    code .

#### Step 2: Explore the Project Structure
Once your app is created, you'll see a basic project structure with the following key files and directories:

* src/: This is where your application's source code resides.
* public/: Static assets like HTML files, images, etc., are placed here.
* package.json: Contains information about the app and its dependencies.
* App.js: The main React component that represents your app.
* index.js: The entry point of your app where React is rendered.

#### Step 3: Run the Development Server

1. #### Start the Development Server:
In the terminal, run the following command to start the development server:

    npm start

This will launch your app in your default web browser. It will also automatically reload whenever you make changes to your code.
If you are on Windows 10 you might run into an error where you will receive an error when trying to start the application.
All you need to no is open the package.json file is VSCode and save it (ctrl+s). You may need to do this everytime you save a change and reload the page.

#### Step 4: Build and Deploy

1. #### Building for Production:
When you're ready to deploy your app, you need to build it for production. Run the following command:

    npm run build
This creates an optimized production build in the build/ directory.

2. #### Deploying:
You can deploy your app to various platforms like Netlify, Vercel, GitHub Pages, or your own hosting. Consult the documentation of the platform you choose for deployment instructions.

#### Step 5: Writing Your App
Now that your app is set up, you can start writing your React components in the src/ directory. Open src/App.js to see the default component. You can create additional components in separate files within the src/ directory.

From here, you can explore the React documentation (https://reactjs.org/docs/getting-started.html) and various online tutorials to learn how to build more complex features and functionalities in your React app.

Remember that this guide covers the basics of setting up a React app. As you become more comfortable with React, you'll discover additional tools, libraries, and patterns that can enhance your development process.

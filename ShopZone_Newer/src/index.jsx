import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot for rendering
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import { Provider } from 'react-redux'; // Import Provider for Redux
import './index.css'; // Import your global CSS styles
import App from './App.jsx'; // Import your main App component
import {store} from './redux/store'; // Import your Redux store


const root = createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

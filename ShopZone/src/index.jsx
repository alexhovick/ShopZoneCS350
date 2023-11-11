import React from 'react';
import { render } from 'react-dom'; // Corrected import statement
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename=''>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

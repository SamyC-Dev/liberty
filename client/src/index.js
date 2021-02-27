import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './components/App/App';
import store from './store';

import reportWebVitals from './reportWebVitals';

const rootReactElement = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

const target = document.getElementById('root');

render(rootReactElement, target);

reportWebVitals();

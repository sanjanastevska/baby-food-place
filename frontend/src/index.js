import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import { App } from './components/App';
// import store from './store';

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <Route path = "/" component = { App } />
    </Router>,
  // </Provider>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import logger from 'redux-logger';
import reducer from './redux/reducer';

import * as serviceWorker from './serviceWorker';
import App from './App';

const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  )
)

ReactDOM.render( 
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider> 
  ,document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

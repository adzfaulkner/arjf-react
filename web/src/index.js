import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './app/Redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/Redux/rootSaga';
import Root from './app/Root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(reduxThunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

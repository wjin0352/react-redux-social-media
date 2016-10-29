var redux = require('redux');
import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers/index';
var thunk = require('redux-thunk').default;
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(allReducers,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;

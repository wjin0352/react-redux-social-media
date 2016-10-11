var redux = require('redux');
import { createStore } from 'redux';
import allReducers from './reducers/index';
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
// added thunk middleware for async calls to database
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;

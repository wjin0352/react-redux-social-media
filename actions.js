const fetch = require('isomorphic-fetch');
import { browserHistory } from 'react-router';

/* VIDEO ACTIONS */
  export function video (video) {
    return {
      type: 'VIDEO',
      video
    }
  };


/* POST ACTIONS */
  export function post (post) {
    return {
      type: 'POST',
      post
    }
  };


/* REGISTRATION ACTIONS */
  export function registerUserAsync(formInput, url) {
    return (dispatch) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formInput)
      })
        .then(data => data.json())  // converts data to json
        .then(jsonData => {
          dispatch(registerSuccess(jsonData))
          console.log(jsonData)
          // client side redirect to '/'
          browserHistory.push('/')
      })
        .catch(err => dispatch(registerError(err.message)));
      };
  };

  export function registerSuccess (userData) {
    return {
      type: 'REGISTER_SUCCESS',
      userData
    }
  };

  export function registerError (error) {
    return {
      type: 'REGISTER_ERROR',
      error
    }
  };


/* LOGIN ACTIONS */
  export function loginUserAsync (userCred, url) {
    return (dispatch) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userCred)
      })
      .then(user => user.json())
      .then(jsonData => {
        dispatch(loginSuccess(jsonData))
        console.log(jsonData);
        browserHistory.push('/')
      })
      .catch(err => dispatch(loginError(err.message)));
    };
  };

  export function loginSuccess (user) {
    return {
      type: 'LOGIN_SUCCESS',
      user
    }
  }

  export function loginError (error) {
    return {
      type: 'LOGIN_ERROR',
      error
    }
  }

const fetch = require('isomorphic-fetch');
import { browserHistory } from 'react-router';

export function video (video) {
  return {
    type: 'VIDEO',
    video
  }
};

export function post (post) {
  return {
    type: 'POST',
    post
  }
};

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

// export { registerUserAsync };

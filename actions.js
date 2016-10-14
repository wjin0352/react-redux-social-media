const fetch = require('isomorphic-fetch');
import { browserHistory } from 'react-router';

/* VIDEO ACTIONS */
  export function newVideoAsync(videoData, url) {
    return (dispatch) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(videoData)
      })
        .then(data => data.json())
        .then(jsonData => {
          dispatch(videoSuccess(jsonData))
          console.log(jsonData)
          // find video id to redirect to that video
          // client side redirect to '/video/:id'
          // browserHistory.push('/')
      })
        .catch(err => dispatch(videoError(err.message)));
    };
  };

  export function videoSuccess (video) {
    return {
      type: 'VIDEO_SUCCESS',
      video
    }
  }

  export function videoError (error) {
    return {
      type: 'VIDEO_ERROR',
      error
    }
  }


/* NEW POST ACTIONS */
  export function newPostAsync(postData, url) {
    return (dispatch) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(data => data.json())
        .then(jsonData => {
          dispatch(postSuccess(jsonData))
          console.log(jsonData)
          // find post id to redirect to that post
          // client side redirect to 'post/:id'
          // browserHistory.push('/')
      })
        .catch(err => dispatch(postError(err.message)));
    };
  };

  export function postSuccess (post) {
    return {
      type: 'POST_SUCCESS',
      post
    }
  };

  export function postError (error) {
    return {
      type: 'POST_ERROR',
      error
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

  export function registerSuccess (jsonData) {
    return {
      type: 'REGISTER_SUCCESS',
      jsonData
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
        console.log('jsondata:', jsonData);
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

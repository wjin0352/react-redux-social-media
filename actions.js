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
        .then(response => response.json())
        .then(jsonData => {
          dispatch(videoSuccess(jsonData))
          console.log(jsonData)
          // find video id to redirect to that video
          // client side redirect to '/video/:id'
          browserHistory.push('/show_videos')

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
        .then(response => response.json())
        .then(jsonData => {
          console.log(jsonData)
          dispatch(postSuccess(jsonData))
          // find post id to redirect to that post
          // client side redirect to 'post/:id'
          browserHistory.push('/show_posts')
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


/* GET ALL POSTS ACTIONS */
  export function allPostsAsync (url) {
    return (dispatch) => {
      return fetch (url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(posts => {
          dispatch(allPostsSuccess(posts))
          browserHistory.push('/show_posts')
      })
        .catch(err => dispatch(allPostsError(err.message)));
    };
  };

  export function allPostsSuccess (posts) {
    return {
      type: 'ALL_POSTS_SUCCESS',
      posts
    }
  };

  export function allPostsError (error) {
    return {
      type: 'ALL_POSTS_ERROR',
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
        .then(response => response.json())  // converts data to json and returns another promise
        .then(jsonData => {
          dispatch(registerSuccess(jsonData.email))
          // console.log(jsonData)
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
      .then(response => response.json())
      .then(jsonData => {
        loginSuccess(jsonData.email, dispatch)
        browserHistory.push('/')
        jsonData
      })
      .catch(err => {
        dispatch(loginError(err.message))
        alert('Opps password or username is incorrect')
      }
    )}
    }

   // .then(response => {
   //      response.json();
   //    })

  // export function userSession (userSession, url) {
  //   return (dispatch) => {
  //     return fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify(userSession)
  //     })
  //       .then(response => {
  //         response.json()
  //     })
  //       .then(currentUser => {
  //         console.log('this is from userSession action creator current user : ', currentUser)
  //         currentUser
  //       })
  //       .catch(err => console.log(err))
  //   };
  // };

  export function loginSuccess (user, dispatch) {
    return dispatch({
      type: 'LOGIN_SUCCESS',
      user
    })
  }

  export function loginError (error) {
    return {
      type: 'LOGIN_ERROR',
      error
    }
  }

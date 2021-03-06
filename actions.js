const fetch = require('isomorphic-fetch');
import axios from 'axios';
import { browserHistory } from 'react-router';

const PROD_URL = 'https://murmuring-oasis-51784.herokuapp.com/';

/* VIDEO ACTIONS */
  export function newVideoAsync(videoData) {
    return (dispatch) => {
      return fetch('/videos', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(videoData)
      })
        .then(response => response.json())
        .then(jsonData => {
          dispatch(videoSuccess(jsonData))
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
  export function newPostAsync(postData) {
    return (dispatch) => {
      return fetch('/posts', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => {
          if (response.status != 200) {
            // fetch was giving me 401 when unlogged in user was making a post
            // it wouldn't send an error
            // instead postSuccess was being called.  so i threw an error if not 200
            // to hit my catch
            throw new Error(response.statusText);
          } else {
            return response;
          }
        })
        .then(response => response.json())
        .then(data => {
          dispatch(postSuccess(data))
          dispatch(newPostToPosts(data))
          browserHistory.push('/show_posts')
        })
        .catch(err => {
          dispatch(postError(err.message))
          browserHistory.push('/login')
        });
    };
  }

  export function postSuccess (post) {
    return {
      type: 'POST_SUCCESS',
      post
    }
  };

  export function newPostToPosts(post) {
    return {
      type: 'ADD_NEW_POST_TO_POSTS',
      post
    }
  }

  export function postError (error) {
    return {
      type: 'POST_ERROR',
      error
    }
  };

/* POST ACTIONS */
  // get a post
  export function fetchPost (id) {
    return (dispatch) => {
      return fetch(`/posts/${id}`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(post => {
          dispatch(getPostSuccess(post))
        })
        .catch(err => dispatch(getPostError(err.message)));
    };
  }

  export function getPostSuccess(post) {
    return {
      type: 'GET_POST_SUCCESS',
      post
    };
  }

  export function getPostError(error) {
    return {
      type: 'GET_POST_ERROR',
      error
    };
  }
  // delete a post
  export function deletePost(id) {
    return (dispatch) => {
      return fetch(`/posts/${id}`, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => {
        response.json()
        browserHistory.push('/show_posts')
      })
      .catch(err => dispatch(postDeleteError(err.message)));
    };
  }

  export function postDeleteError(error) {
    return {
      type: 'POST_DELETE_ERROR',
      error
    };
  }

/* COMMENT ON POST ACTIONS */
  // create a comment on POST
  export function createComment(commentData) {
    return (dispatch) => {
      return fetch(`/posts/${commentData.id}/comments`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
      })
      .then(response => {
        if (response.status != 200) {
          throw new Error(response.statusText);
        } else {
          return response;
        }
      })
        .then(response => response.json())
        .then(comment => {
          dispatch(commentSuccess(comment))
          dispatch(addNewCommentToComments(comment))
          browserHistory.push(`/my_posts/${comment.postid}`)
        })
        .catch(err => {
          dispatch(commentError(err.message))
          browserHistory.push('/login')
        });
      };
    }

    export function commentSuccess(comment) {
      return {
        type: 'COMMENT_SUCCESS',
        comment
      };
    }

    export function commentError(error) {
      return {
        type: 'COMMENT_ERROR',
        error
      };
    }

    export function addNewCommentToComments(comment) {
      return {
        type: 'ADD_NEW_COMMENT_TO_COMMENTS',
        comment
      };
    }

/* GET ALL VIDEOS ACTIONS */
  export function allVideosAsync(url) {
    return (dispatch) => {
      return fetch('/videos', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(videos => {
          dispatch(allVideosSuccess(videos))
        })
        .catch(err => dispatch(allVideosError(err.message)));
    };
  };

  export function allVideosSuccess(videos) {
    return {
      type: 'ALL_VIDEOS_SUCCESS',
      videos
    }
  };

  export function allVideosError(error) {
    return {
      type: 'ALL_VIDEOS_ERROR',
      error
    }
  };

/* GET ALL POSTS ACTIONS */
  export function fetchPostsAsync (url) {
    return (dispatch) => {
      return fetch ('/posts', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(posts => {
          dispatch(fetchPostsSuccess(posts))
      })
        .catch(err => dispatch(fetchPostsError(err.message)));
    };
  };

  export function fetchPostsSuccess (posts) {
    return {
      type: 'FETCH_POSTS_SUCCESS',
      posts
    }
  };

  export function fetchPostsError (error) {
    return {
      type: 'FETCH_POSTS_ERROR',
      error
    }
  };

/* GET ALL USER POSTS  */
  export function fetchUserPostsAsync(id) {
    return (dispatch) => {
      return fetch(`/posts/users/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(userPosts => {
        dispatch(fetchUserPostsSuccess(userPosts))
        browserHistory.push('/show_user_posts')
      })
        .catch(err => dispatch(fetchUserPostsError(err.message)));
    };
  }

  export function fetchUserPostsSuccess(userPosts) {
    return {
      type: 'FETCH_USER_POSTS_SUCCESS',
      userPosts
    };
  }

  export function fetchUserPostsError(error) {
    return {
      type: 'FETCH_USER_POSTS_ERROR',
      error
    };
  }

/* GET ALL COMMENTS */
  export function getPostComments(id) {
    return (dispatch) => {
      axios.get(`/posts/${id}/comments`)
      .then(response => {
        dispatch(commentsSuccess(response.data))
      })
      .catch(err => dispatch(commentsError(err.message)))
    };
  }

  export function commentsSuccess(comments) {
    return {
      type: 'COMMENTS_SUCCESS',
      comments
    };
  }

  export function commentsError(error) {
    return {
      type: 'COMMENTS_ERROR',
      error
    };
  }

/* REGISTRATION ACTIONS */
  export function registerUserAsync(formInput, url) {
    return (dispatch) => {
      return fetch('/users/register', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formInput)
      })
        .then(response => response.json())  // converts data to json and returns another promise
        .then(jsonData => {
          dispatch(registerSuccess(jsonData))
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


/* LOGIN LOGOUT ACTIONS */
  export function loginUserAsync (userCred, url) {
    return (dispatch) => {
      return fetch('/users/login', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(userCred)
      })
      .then(response => response.json())
      .then(jsonData => {
        var userData = {
          user: jsonData.username,
          email: jsonData.email
        }
        loginSuccess(userData, dispatch)
        browserHistory.push('/')
      })
      .catch(err => {
        dispatch(loginError(err.message))
        alert('Opps password or username is incorrect')
      }
    )}
    }

  export function loginSuccess (userData, dispatch) {
    return dispatch({
      type: 'LOGIN_SUCCESS',
      userData
    })
  }

  export function loginError (error) {
    return {
      type: 'LOGIN_ERROR',
      error
    }
  }

  export function logOutUser() {
    return (dispatch) => {
      axios.get(`/users/log_out`)
      .then(response => dispatch(loggingOutUser()))
      .catch(err => dispatch(logOutError(err.message)))
    }
  }

  export function loggingOutUser() {
    return {
      type: 'LOG_OUT'
    };
  }

  export function logOutError(error) {
    return {
      type: 'LOG_OUT_ERROR',
      error
    };
  }

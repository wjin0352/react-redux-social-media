import * as actions from '../actions';

const initialState = {
  posts: [],
  error: ''
}

const allPosts = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts
      }
    case 'FETCH_POSTS_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'ADD_NEW_POST_TO_POSTS':
      return {
        ...state,
        posts: action.post
      }
  default:
    return state;
  }
}

export default allPosts;

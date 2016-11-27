import * as actions from '../actions';

const initialState = {
  userPosts: [],
  error: ''
}

const allUserPosts = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_POSTS_SUCCESS':
      return {
        ...state,
        userPosts: action.userPosts
      }
    case 'FETCH_USER_POSTS_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'ADD_NEW_USER_POSTS_TO_POSTS':
      return {
        ...state,
        userPosts: [...state.userPosts, action.post]
      }
    default:
      return state;
  }
}

export default allUserPosts;

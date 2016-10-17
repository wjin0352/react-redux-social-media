import * as actions from '../actions';

const initialState = {
  posts: [],
  error: ''
}
const allPosts = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts
      }
    case 'ALL_POSTS_ERROR':
      return {
        ...state,
        error: action.err
      }
  default:
    return state;
  }
}

export default allPosts;

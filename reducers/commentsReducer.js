import * as actions from '../actions';

const initialState = {
  comments: [],
  error: ''
}

const allComments = (state = initialState, action) => {
  switch(action.type) {
    case 'COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.comments
      }
    case 'COMMENTS_ERROR':
      return {
        ...state,
        error:action.error
      }
  default:
    return state;
  }
}

export default allComments;

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
    case 'ADD_NEW_COMMENT_TO_COMMENTS':
      return {
        ...state,
        comments: [...state.comments, action.comment]
      }
  default:
    return state;
  }
}

export default allComments;

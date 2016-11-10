import * as actions from '../actions';

const initialState = {
  comment: '',
  error: ''
};

const newComment = (state = initialState, action) => {
  switch (action.type) {
    case 'COMMENT_SUCCESS':
      return {
        ...state,
        comment: action.comment
      }
    case 'COMMENT_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state;
  }
}

export default newComment;

import * as actions from '../actions';

const initialState = {
  error: ''
};

const deletePost = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_DELETE_ERROR':
        return {
          ...state,
          error: action.error
        }
    default:
      return state;
  }
}

export default deletePost;

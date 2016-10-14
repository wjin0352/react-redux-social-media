import * as actions from '../actions';

const initialState = {
  userPost: {
    title: '',
    content: '',
    likes: 0,
    userid: null
  },
  error: ''
};

const newPost = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      return {
        ...state,
        userPost: action.jsonData
      }
    case 'POST_ERROR':
      return {
        ...state,
        error: action.err.message
      }
  default:
    return state;
  }
}

export default newPost;

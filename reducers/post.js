import * as actions from '../actions';

const initialState = {
  userPost: {
    title: '',
    content: '',
    likes: 0,
    userid: ''
  },
  error: ''
};

const newPost = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      return {
        ...state,
        userPost: action.post
      }
    case 'POST_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state;
  }
}

export default newPost;

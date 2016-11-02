import * as actions from '../actions';

const initialState = {
  current_post: {
    title: '',
    content: '',
    likes: 0,
    userid: ''
  },
  error: ''
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_SUCCESS':
      return {
        ...state,
        current_post: action.post[0]
      }
    case 'GET_POST_ERROR':
      return {
        ...state,
        error: action.error[0]
      }
    default:
      return state;
  }
}

export default getPost;

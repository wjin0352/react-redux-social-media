import * as actions from '../actions';

const initialState = {
  user: {
    username: ''
  },
  error: ''
};

const login = function (state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.jsonData
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.err.message
      }
  default:
    return state;
  }
}

export default login;

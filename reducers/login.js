import * as actions from '../actions';

const initialState = {
  user: null,
  error: ''
};

const login = function (state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.user
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.err
      }
  default:
    return state;
  }
}

export default login;

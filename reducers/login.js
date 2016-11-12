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
        error: action.error
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: null
      }
    case 'LOG_OUT_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state;
  }
}

export default login;

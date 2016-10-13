import * as actions from '../actions';

const initialState = {

};

const login = function (state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state
      }
    case 'LOGIN_ERROR':
      return {
        ...state
      }
  default:
    return state;
  }
}

export default login;

import * as actions from '../actions';

const initialState = {
  user: {
    username: '',
    password: '',
    email: ''
  },
  error: ''
};

const register = function (state = initialState, action) {
  switch(action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.jsonData
      }
    case 'REGISTER_ERROR':
      return {
        ...state,
        error: action.err
      }
    default:
      return state;
  }
}

export default register;

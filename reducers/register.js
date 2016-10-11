import * as actions from '../actions';

const initialState = {
  username: '',
  password: '',
  email: ''
};

const register = function (state = initialState, action) {
  switch(action.type) {
    case 'REGISTER_USER':
      return state;
    default:
      return state;
  }
}

export default register;

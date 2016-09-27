import * as actions from '../actions';

const initialState = {};

const video = function (state = initialState, action) {
  switch(action.type) {
    case 'VIDEO':
      return 'state';
  default:
    return state;
  }
}

export default video;

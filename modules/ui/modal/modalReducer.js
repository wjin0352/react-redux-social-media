import * as actions from './actions.js';

const initialState = {
  show: false,
  description: '',
  videolink: '',
  title: ''
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MODAL':
      return {
        ...state,
        ...action.video
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        show: action.show
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        show: false
      }
  default:
    return state;
  }
}

export default modalReducer;

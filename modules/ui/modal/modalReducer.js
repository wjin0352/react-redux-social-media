import * as actions from './actions.js';

const initialState = {
  show: false,
  description: '',
  videolink: '',
  title: ''
};

const modalReducer = (state = initialState, action) => {
  console.log('action: ', action)
  console.log('state: ', state)
  switch (action.type) {
    case 'CREATE_MODAL':
      return {
        ...state,
        description: action.video.description,
        videolink: action.video.videolink,
        title: action.video.title
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

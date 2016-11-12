import * as actions from '../actions';

const initialState = {
  userVideo: {
    videolink: '',
    description: '',
    comments: [],
    userid: null
  },
  error: ''
};

const newVideo = (state = initialState, action) => {
  switch (action.type) {
    case 'VIDEO_SUCCESS':
      return {
        ...state,
        userVideo: {...action.video}
      }
    case 'VIDEO_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state;
  }
}

export default newVideo;

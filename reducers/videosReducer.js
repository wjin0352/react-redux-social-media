import * as actions from '../actions';

const initialState = {
  videos: [],
  error: ''
}

const allVideos = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_VIDEOS_SUCCESS':
      return {
        ...state,
        videos: action.videos
      }
    case 'ALL_VIDEOS_ERROR':
      return {
        ...state,
        error: action.error
      }
  default:
    return state;
  }
}

export default allVideos;

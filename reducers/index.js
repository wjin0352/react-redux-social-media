import { combineReducers } from 'redux';
import video from './video';
import post from './post';
import register from './register';
import login from './login';
import allPosts from './postsReducer';
import allVideos from './videosReducer';

const allReducers = combineReducers({
  video,
  post,
  register,
  login,
  allPosts,
  allVideos
});

export default allReducers;

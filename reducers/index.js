import { combineReducers } from 'redux';
import video from './video';
import post from './post';
import register from './register';
import login from './login';

const allReducers = combineReducers({
  video,
  post,
  register,
  login,
});

export default allReducers;


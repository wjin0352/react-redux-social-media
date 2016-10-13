import { combineReducers } from 'redux';
import video from './video';
import register from './register';
import login from './login';

const allReducers = combineReducers({
  video,
  register,
  login
});

export default allReducers;


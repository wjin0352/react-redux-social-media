import { combineReducers } from 'redux';
import video from './video';
import register from './register';

const allReducers = combineReducers({
  video,
  register
});

export default allReducers;


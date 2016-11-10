import { combineReducers } from 'redux';
import video from './video';
import post from './post';
import register from './register';
import login from './login';
import allPosts from './postsReducer';
import allVideos from './videosReducer';
import allUserPosts from './userPostsReducer';
import getPost from './getPost';
import deletePost from './deletePost';
import comment from './comment';
import allComments from './commentsReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
  video,
  post,
  register,
  login,
  allPosts,
  allVideos,
  allUserPosts,
  getPost,
  deletePost,
  comment,
  allComments,
  routing: routerReducer
});

export default allReducers;

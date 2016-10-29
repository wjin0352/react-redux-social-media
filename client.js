import React from 'react';
import { render } from 'react-dom';

import MainPage from './components/MainPage';
import Header from './components/Header';
import PostsFeed from './components/PostsFeed';
import VideosFeed from './components/VideosFeed';
import Registration from './components/Registration';
import Login from './components/Login';
import NewPost from './components/NewPost';
import NewVideo from './components/NewVideo';
import UserPostsFeed from './components/UserPostsFeed';
import Post from './components/Post';
import Video from './components/Video';
// import onPostsEnter from './route_callbacks/route_callbacks';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainPage}>
        <IndexRoute component={PostsFeed}/>
        <Route path='show_videos' component={VideosFeed}/>
        <Route path='show_posts' component={PostsFeed} />
        <Route path='new_post' component={NewPost}/>
        <Route path='new_video' component={NewVideo}/>
        <Route path='registration' component={Registration}/>
        <Route path='login' component={Login}/>
        <Route path="post" component={Post}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

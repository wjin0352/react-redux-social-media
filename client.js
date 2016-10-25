import React from 'react';
import { render } from 'react-dom';
import MainPageContainer from './containers/MainPageContainer';
import Header from './components/Header';
import PostsFeedContainer from './containers/PostsFeedContainer';
import VideosFeedContainer from './containers/VideosFeedContainer';
import PostsFeed from './components/PostsFeed';
import VideosFeed from './components/VideosFeed';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';
import NewPostContainer from './containers/NewPostContainer';
import NewVideoContainer from './containers/NewVideoContainer';
import UserPostsFeed from './components/UserPostsFeed';
import Post from './components/Post';
import Video from './components/Video';
import onPostsEnter from './route_callbacks/route_callbacks';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainPageContainer}>
        <IndexRoute component={VideosFeedContainer}/>
        <Route path='/show_videos' component={VideosFeedContainer}/>
        <Route path='/show_posts' component={PostsFeedContainer} onEnter={onPostsEnter} />
        <Route path='/new_post' component={NewPostContainer}/>
        <Route path='/new_video' component={NewVideoContainer}/>
        <Route path='/registration' component={RegistrationContainer}/>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/posts/:id' component={Post}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

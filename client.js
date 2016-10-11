import React from 'react';
import { render } from 'react-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import PostsFeed from './components/PostsFeed';
import VideosFeed from './components/VideosFeed';
import Registration from './components/Registration';
import Login from './components/Login';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainPage}>
        <IndexRoute component={PostsFeed}/>
        <Route path='/show_videos' component={VideosFeed}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

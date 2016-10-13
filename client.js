import React from 'react';
import { render } from 'react-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import PostsFeed from './components/PostsFeed';
import VideosFeed from './components/VideosFeed';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainPage}>
        <IndexRoute component={PostsFeed}/>
        <Route path='/show_videos' component={VideosFeed}/>
        <Route path='/registration' component={RegistrationContainer}/>
        <Route path='/login' component={LoginContainer}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

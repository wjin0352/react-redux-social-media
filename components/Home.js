import React, { Component } from 'react';
import PostsFeed from './PostsFeed';
import VideosFeed from './VideosFeed';
import Header from './Header';
import HomeVideosFeed from './HomeVideosFeed';
import InfoModal from './InfoModal';
import { Link, browserHistory } from 'react-router';

// NO LOGGED IN USER .. All Posts Random feed
class Home extends Component {
  render() {
    return (
      <div className='home_container'>
        <h4 id="videos_title">Videos Feed</h4>
        <ul className="clearfix">
          <li><a className="what" href="#" >What ?</a></li>
        </ul>
        <InfoModal />
        <VideosFeed />
        <PostsFeed />
      </div>
    );
  }
};

export default Home;

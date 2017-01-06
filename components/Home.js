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
        <div className="info">
          <h1>Social Media Blog</h1>
          <p>
          Post videos and articles to share with our community.
          Start by creating an account and then posting your first Article or Video from the top menu.
          To demo this application sign in at the top with
          <br/>
          username: user1
          password: user1
          </p>
        </div>
        <h4 id="videos_title">Videos Feed</h4>
        <VideosFeed />
        <PostsFeed />
        <InfoModal />
      </div>
    );
  }
};

export default Home;

import React from 'react';
import Header from './Header';
import VideosFeed from './VideosFeed';
import Post from './Post';

const MainPage = () => {
  return (
    <div>
      <Header />
      <VideosFeed />
      <Post />
    </div>
  )
};

export default MainPage;

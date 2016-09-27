import React from 'react';
import Header from './Header';
import VideosFeed from './VideosFeed';
import PostsFeed from './PostsFeed';

const MainPage = () => {
  return (
    <div>
      <Header />
      <PostsFeed />
    </div>
  )
};

export default MainPage;

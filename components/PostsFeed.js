import React from 'react';
import Post from './Post';
import { Jumbotron } from 'react-bootstrap';

const PostsFeed = () => {
  return (
    <Jumbotron className='postsfeed' >
      <Post />
    </Jumbotron>
  )
}

export default PostsFeed;

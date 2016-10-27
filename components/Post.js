import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Post extends Component {
  render () {
    return (
      <container className='post-container'>
        <Jumbotron bsStyle='post'>
          <p><Button bsStyle="primary">edit</Button></p>
          <p><Button bsStyle="primary">delete</Button></p>
        </Jumbotron>
      </container>
    );
  }
}

export default Post;

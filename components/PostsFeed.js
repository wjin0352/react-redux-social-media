import React from 'react';
import Post from './Post';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

// NO LOGGED IN USER .. All Posts Random feed
const PostsFeed = React.createClass({
  componentWillMount () {
    var url = "http://localhost:8000/posts"
    this.props.allPostsAsync(url);
  },
  render: function () {

    return (
      <div className='user_posts_feed'>
        <h3>Posts Feed </h3>
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>with pic</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

export default PostsFeed;

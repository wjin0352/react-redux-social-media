import React from 'react';
import Post from './Post';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

// NO LOGGED IN USER .. All Posts Random feed
const PostsFeed = React.createClass({
  componentWillMount: function () {
    const url = 'http://localhost:8000/posts';
    this.props.fetchPostsAsync(url);
  },
  renderPosts (post) {
      console.log(post);
      return (
        <div>
          <h3>{post.title}</h3>
          <Link>
            <Grid>
              <Row>
              <Col xs={6} md={4}>
                <Thumbnail src="" alt="242x200">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              </Row>
            </Grid>
          </Link>
        </div>
      )
  // {this.props.posts ? this.renderPosts() : <h3>No posts: </h3>}
  },
  render: function () {
    const posts = this.props.posts.posts;
    return (
      <div className='user_posts_feed'>
        <h3>Posts Feed </h3>
        {posts.map(post => this.renderPosts(post))}
      </div>
    )
  }
});

export default PostsFeed;

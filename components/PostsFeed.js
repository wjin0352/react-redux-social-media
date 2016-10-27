import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { fetchPostsAsync } from '../actions';
import Post from './Post';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

// NO LOGGED IN USER .. All Posts Random feed
class PostsFeed extends Component {
  componentWillMount () {
    const url = 'http://localhost:8000/posts';
    this.props.fetchPostsAsync(url);
  }

  renderPosts(post) {
      return (
        <Link to='/posts'>
        {this.props.params.stuff}
          <Grid key={post._id} className="post_feed_item_grid">
            <Row>
            <Col xs={4} md={4} className="col-post-item">
              <Thumbnail src="" >
                <h3>{post.title}</h3>
                  <Button bsStyle="warning btn-sm">See Post</Button>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        </Link>
      )
  {this.props.posts ? this.renderPosts() : <h3>No posts: </h3>}
  }

  render() {
    const posts = this.props.posts.posts;
    return (
      <div className='user_posts_feed'>
        <h3>Posts Feed</h3>
        <div className="feed_wrapper">
          {posts.map(post => this.renderPosts(post))}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    posts: state.allPosts
  }
}

export default connect(mapStateToProps, { fetchPostsAsync })(PostsFeed);

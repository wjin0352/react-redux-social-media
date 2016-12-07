import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAsync } from '../actions';
import Post from './Post';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

// NO LOGGED IN USER .. All Posts Random feed
class PostsFeed extends Component {
  componentWillMount () {
    const url = 'http://localhost:8000/posts';
    this.props.fetchPostsAsync(url);
  }
  renderPosts(post) {
      console.log(post)
      return (
        <Link to={`/my_posts/${post._id}`} key={post._id}>
          <Grid className="post_feed_item_grid">
            <Row>
            <Col   className="col-post-item">
              <Thumbnail src="" >
                <h3>{post.title}</h3>
                  <Button bsStyle="default" onClick={() => browserHistory.push(`/my_posts/${post._id}`)}>See Post</Button>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        </Link>
      )
  {this.props.posts ? this.renderPosts() : <h3>No posts: </h3>}
  }

  render() {
    const posts = this.props.posts;
    // console.log('logged in user', res.locals.user);

    return (
      <div className='user_posts_feed'>
        <h4>Posts Feed</h4>
        <div className="feed_wrapper">
          {posts.map(post => this.renderPosts(post))}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: state.allPosts.posts
  }
}

export default connect(mapStateToProps, { fetchPostsAsync })(PostsFeed);

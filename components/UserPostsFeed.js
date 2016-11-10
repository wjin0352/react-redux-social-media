import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPostsAsync } from '../actions';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Post from './Post';

class UserPostsFeed extends Component {
  componentWillMount() {
    const url = 'http://localhost:8000/posts/user';
    this.props.fetchUserPostsAsync(url);
  }

  renderUserPosts(userPost) {
    return (
      <Link to='/' key={userPost._id}>
      {this.props.params.stuff}
        <Grid className="post_feed_item_grid">
          <Row>
          <Col xs={4} md={4} className="col-post-item">
            <Thumbnail src="" >
              <h3>{userPost.title}</h3>
                <Button bsStyle="warning">See Post</Button>
            </Thumbnail>
          </Col>
          </Row>
        </Grid>
      </Link>
    )
    {this.props.userPosts ? this.renderUserPosts() : <h3>No posts: </h3>}
  }

  render() {
    // console.log('userPosts: ', this.props.userPosts)
    const userPosts = this.props.userPosts.userPosts;
    return (
      <div className='user_posts_feed'>
        <h3>Posts Feed</h3>
        <div className="feed_wrapper">
          {userPosts.map(userPost => this.renderUserPosts(userPost))}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    userPosts: state.allUserPosts
  };
}

export default connect(mapStateToProps, { fetchUserPostsAsync })(UserPostsFeed);

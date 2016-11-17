import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';
import NewComment from './NewComment';
import CommentsFeed from './CommentsFeed';

class Post extends Component {
  componentWillMount() {
    var id = this.props.params.id;
    this.props.fetchPost(id);
  }

  handleDelete(id) {
    console.log(id);
    this.props.deletePost(id);
  }

  render() {
    var post = this.props.post.current_post;
    return (
      <div>
        <container className='post-container' key={post._id}>
          <Jumbotron bsStyle='post'>
            <h3>{post.title}</h3>
              <div>
                <p className="post-paragraph">
                  {post.content}
                </p>
              </div>
            <h6>{post.likes}</h6>
            <div className="jumbotron-buttons">
              <Button bsStyle="primary">edit</Button>
              <Button bsStyle="primary" onClick={() => this.handleDelete(post._id)}>delete</Button>
            </div>
            <NewComment post_id={post._id}/>
            <CommentsFeed post_id={post._id}/>
          </Jumbotron>
        </container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.getPost
  };
}

// export default connect(mapStateToProps)(Post);
export default connect(mapStateToProps, { fetchPost, deletePost })(Post);

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
    this.props.deletePost(id);
  }

  showButtons(post) {
    return (
      <div>
        <Button bsStyle="primary">edit</Button>
        <Button bsStyle="primary" onClick={() => this.handleDelete(post._id)}>delete</Button>
      </div>
    );
  }
  render() {
    var post = this.props.post.current_post;
    console.log(windowLocation)
    return (
      <div>
        <container className='post-container' key={post._id}>
          <Jumbotron bsStyle='post'>
            <h3>{post.title}</h3>
              <div>
                <p className="post_paragraph">
                  {post.content}
                </p>
              </div>
            <h6>{post.likes}</h6>
            <div className="jumbotron-buttons">
            { !(this.props.logged_user.user) ?
            console.log('not loggedin') :
            this.showButtons(post)}
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
    post: state.getPost,
    logged_user: state.login
  };
}

// export default connect(mapStateToProps)(Post);
export default connect(mapStateToProps, { fetchPost, deletePost })(Post);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class Post extends Component {
  componentWillMount() {
    var id = this.props.params.id;
    var url = `http://localhost:8000/posts/${id}`;
    // var url ='http://localhost:8000/posts/asdf';
    this.props.fetchPost(url, id);
  }

  render() {
    var post = this.props.post.current_post;
    console.log('whats on the props object: ', this.props);
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
              <Button bsStyle="primary">delete</Button>
            </div>
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
export default connect(mapStateToProps, { fetchPost })(Post);

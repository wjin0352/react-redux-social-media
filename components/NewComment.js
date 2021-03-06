import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';
import { createComment } from '../actions';

class NewComment extends Component {
  constructor(props){
    super(props);
  }

  createComment(e) {
    e.preventDefault();
    var form = e.target;
    var comment = form.querySelector('[name="post_comment"]').value;
    var id = this.props.post_id;
    var commentData = {
      comment,
      id
    };
    this.props.createComment(commentData);
    form.querySelector('[name="post_comment"]').value = '';
  }

  cancelComment(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className='new-post-form' onSubmit={(e) => this.createComment(e)}>
          <li>Comment : </li>
          <textarea rows="7" cols="50" type='text' name='post_comment' placeholder="Add a comment..." required >
          </textarea><br/>
          <div className="comment-buttons-container">
            <button type="reset" className="btn btn-default">Cancel</button>
            <button className="btn btn-primary" onClick={() => this.cancelComment}>Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comment
  };
}

export default connect(mapStateToProps, {createComment})(NewComment);

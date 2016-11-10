import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Media, Left, Glyphicon, Right, Heading, Body, Thumbnail } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { getComments } from '../actions'

class CommentsFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('COMMENT FEED COMPONENT MOUNTING!!!!')
    this.props.getComments(this.props.post_id);
  }
  // <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
  renderComments(comment) {
    console.log('xxxxxxxxCOMMENT OBJECT:', comment)
    return (
      <div className="single_comment" key={comment._id}>
        <Media>
          <Media.Left align="top">
          <Glyphicon glyph="align-left" />

          </Media.Left>
          <Media.Body>
            <Media.Heading>By {`${comment.username}, ${comment.user_email}`}</Media.Heading>
            <p>{comment.comment}</p>
          </Media.Body>
        </Media>
      </div>
    );
    {this.props.comments ? this.renderComments() : <h3>No Comments: </h3>}
  }

  render() {
    const comments = this.props.comments;
    return (
      <div className="user_comments_feed">
        <h3>comments feed</h3>
        <div className="comments_feed_wrapper">
          Comments: {comments.map(comment => this.renderComments(comment))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.allComments.comments
  };
}

export default connect(mapStateToProps, { getComments })(CommentsFeed);

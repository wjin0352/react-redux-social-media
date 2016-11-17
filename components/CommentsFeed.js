import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Media, Left, Glyphicon, Right, Heading, Body, Thumbnail } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { getPostComments } from '../actions'

class CommentsFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('COMMENT FEED COMPONENT MOUNTING!!!!')
    this.props.getPostComments(this.props.post_id);
  }

  renderComments(comment) {
    console.log('xxxxxxxx COMMENT OBJECT:', comment)
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
        <div className="comments_feed_wrapper">
          Comments feed: {comments.map(comment => this.renderComments(comment))}
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

export default connect(mapStateToProps, { getPostComments })(CommentsFeed);

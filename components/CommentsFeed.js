import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Media, Left, Right, Heading, Body, Row, Col, Thumbnail, Button } from 'react-bootstrap';
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

  renderComments(comment) {
    return (
      <div className="single_comment" key={comment._id}>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{comment.userid}</Media.Heading>
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

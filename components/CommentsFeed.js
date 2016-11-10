import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import { getComments } from '../actions'

class CommentsFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getComments(this.props.post_id);
  }

  render() {
    const comments = this.props.comments;
    return (
      <div className="user_comments_feed">
        <h3>comments feed</h3>
        <div className="comments_feed_wrapper">
          Comments
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

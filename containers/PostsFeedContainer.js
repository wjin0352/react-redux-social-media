import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import PostsFeed from '../components/PostsFeed';

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allPostsAsync: (url) => {
      dispatch(actions.allPostsAsync(url))
    }
  }
}

const PostsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(PostsFeed);

export default PostsFeedContainer;

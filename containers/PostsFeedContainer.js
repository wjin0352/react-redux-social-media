import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import PostsFeed from '../components/PostsFeed';


const mapStateToProps = (state) => {
  return {
    posts: state.allPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsAsync: (url) => {
      dispatch(actions.fetchPostsAsync(url))
    }
  }
}

const PostsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(PostsFeed);

export default PostsFeedContainer;

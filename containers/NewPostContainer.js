import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import NewPost from '../components/NewPost';

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPostAsync: (postData, url) => {
      dispatch(actions.newPostAsync(postData, url))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

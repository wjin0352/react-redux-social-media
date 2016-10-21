import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import VideosFeed from '../components/VideosFeed';

const mapStateToProps = (state) => {
  return {
    videos: state.videosReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allPostsAsync: (url) => {
      // dispatch(actions.allVideosAsync(url))
    }
  }
}

const VideosFeedContainer = connect(mapStateToProps, mapDispatchToProps)(VideosFeed);

export default VideosFeedContainer;

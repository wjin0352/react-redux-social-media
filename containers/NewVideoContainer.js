import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import NewVideo from '../components/NewVideo';

const mapStateToProps = (state) => {
  return {
    video: state.video
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newVideoAsync: (videoData, url) => {
      dispatch(actions.newVideoAsync(videoData, url))
    }
  }
}

const NewVideoContainer = connect(mapStateToProps, mapDispatchToProps)(NewVideo);

export default NewVideoContainer;

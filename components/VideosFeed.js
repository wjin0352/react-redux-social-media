import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allVideosAsync } from '../actions';
import { Link } from 'react-router';
import Video from './Video';

// NO LOGGED IN USER .. All Videos random feed
class VideosFeed extends Component {
  componentWillMount() {
    const url = "http://localhost:8000/videos"
    this.props.allVideosAsync(url);
  }

  renderVideos(video) {
    return (
      <Link to='/'>
        <div className='videos'>
          <h3>{video.description}</h3>
          <iframe className='iframe-video'
            src={video.videolink}>
          </iframe>
        </div>
      </Link>
    );
  }

  render() {
    const videos = this.props.videos.videos;
    return (
      <div>
        <Video />
        {videos.map(video => this.renderVideos(video))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.allVideos
  }
}

export default connect(mapStateToProps, { allVideosAsync })(VideosFeed);

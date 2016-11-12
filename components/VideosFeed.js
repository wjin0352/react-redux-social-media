import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allVideosAsync } from '../actions';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
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
      <Col xs={6} md={4}>
        <div className='video-thumbnail'>
          <Link to='/'>
            <iframe className='iframe-video-feed'
              src={video.videolink} allowfullscreen>
            </iframe>
          </Link>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </div>
      </Col>
    );
  }

  render() {
    const videos = this.props.videos.videos;
    return (
      <Grid>
        <Row>
          <div>
            {videos.map(video => this.renderVideos(video))}
          </div>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.allVideos
  }
}

export default connect(mapStateToProps, { allVideosAsync })(VideosFeed);

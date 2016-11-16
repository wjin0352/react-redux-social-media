import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class Video extends Component {
  render() {
    return (
      <div className='video'>
        <iframe className='iframe-video'
          src={this.props.video.videolink} allowFullScreen>
        </iframe>
        <p>{this.props.video.description}</p>
      </div>
    );
  }
}

export default Video;

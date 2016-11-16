import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allVideosAsync } from '../actions';
import { getModalData, openModal } from '../modules/ui/modal/actions';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Video from './Video';
import ModalComponent from '../modules/ui/modal/ModalComponent';

// NO LOGGED IN USER .. All Videos random feed
class VideosFeed extends Component {
  constructor(props) {
    super(props);
    // this.state = { showModal: false };
  }

  componentWillMount() {
    const url = "http://localhost:8000/videos";
    this.props.allVideosAsync(url);
  }

  handleModal(video) {
    // console.log('handlemodal video: ', video)
    // this.state = { showModal: true };
    this.props.openModal();
    this.props.getModalData(video);
  }

  renderVideos(video) {

    return (
      <div key={video._id} >
        <Col xs={4} md={3} className="video-single-feed">
          <Thumbnail src={video.image} alt="242x200" className="video-image-thumbnail">
            <h3>{video.title}</h3>
            <p>
              <Button bsStyle="primary" onClick={
                () => this.handleModal(video)}
                >Watch</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
      </div>
    );
  }

  render() {
    const videos = this.props.videos.videos;
    return (
      <Grid className="grid-container">
        <Row>
          <div className="video-feed-container">
            {videos.map(video => this.renderVideos(video))}
          </div>
          <ModalComponent />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.allVideos
  };
}

export default connect(mapStateToProps, { allVideosAsync, getModalData, openModal })(VideosFeed);

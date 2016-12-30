import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allVideosAsync } from '../actions';
import { getModalData, openModal } from '../modules/ui/modal/actions';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Video from './Video';
import ModalComponent from '../modules/ui/modal/ModalComponent';

// NO LOGGED IN USER .. All Videos random feed
class HomeVideosFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.allVideosAsync();
  }

  handleModal(video) {
    this.props.openModal();
    this.props.getModalData(video);
  }

  renderVideos(video) {

    return (
      <div key={video._id} >
        <Col xs={6} md={4}  className="video-single-feed col-lg-3">
          <Thumbnail src={video.image} alt="242x200" className="video-image-thumbnail">
            <h3 className="video_title">{video.title}</h3>
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
      <div className="video-feed-main-container">
        <Grid className="grid-container">
          <Row className="video-feed-row">
            <div className="video-feed-container">
              {videos.map(video => this.renderVideos(video))}
            </div>
            <ModalComponent />
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.allVideos
  };
}

export default connect(mapStateToProps, { allVideosAsync, getModalData, openModal })(HomeVideosFeed);

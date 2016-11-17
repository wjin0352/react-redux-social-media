import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal} from 'react-bootstrap';
import { closeModal } from './actions';

class ModalComponent extends Component {
  render() {
    return (
      <Modal className="video-modal" show={this.props.modalVideo.show} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-lg">{this.props.modalVideo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.modalVideo.description}</p>
          <iframe className='iframe-video-feed'         src={this.props.modalVideo.videolink}
          allowFullScreen>
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={
            () => this.props.closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalVideo: state.modalReducer
  };
}

export default connect(mapStateToProps, { closeModal })(ModalComponent);

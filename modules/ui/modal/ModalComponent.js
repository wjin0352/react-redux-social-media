import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal} from 'react-bootstrap';
import { closeModal } from './actions';

const ModalComponent = ({
  modalVideo: { show, title, videolink, description },
  closeModal
}) => {
  return (
    <Modal className="video-modal" show={show} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <iframe className='iframe-video-feed' src={videolink}
        allowFullScreen>
        </iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={
          () => closeModal()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function mapStateToProps(state) {
  return {
    modalVideo: state.modalReducer
  };
}

export default connect(mapStateToProps, { closeModal })(ModalComponent);

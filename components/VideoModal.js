// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import { Modal, Button } from 'react-bootstrap';
//
// class VideoModal extends Component {
//   // closeVideo() { this.setState({ showModal: false }) }
//   //  onClick={this.setState({showModal: false})}
//   render() {
//     return (
//       <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>{this.props.video.title}</h4>
//           <p>{this.props.video.description}</p>
//           <iframe className='iframe-video-feed' src={this.props.video.videolink}
//              allowFullScreen>
//           </iframe>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={this.props.closeModal()}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }
//
// export default VideoModal;

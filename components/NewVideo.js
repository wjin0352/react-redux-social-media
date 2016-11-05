import React, { Component } from 'react';
import { newVideoAsync } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

class NewVideo extends Component {
    constructor(props) {
      super(props);
      this.state = { showModal: true };
    }

  createVideo(e) {
    e.preventDefault();
    var form = e.target;
    var videolink = form.querySelector('[name="url"]').value;
    var description = form.querySelector('[name="description"]').value;
    var videoData = {
      videolink,
      description
    }
    var url = "http://localhost:8000/videos";
    this.props.newVideoAsync(videoData, url);
  }

  render() {
    return (
      <Modal show={this.state.showModal} bsSize="large" >
          <Modal.Header>
            <Modal.Title >
             Add a link
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='new-video-form' onSubmit={this.createVideo.bind(this)}>
              <fieldset>
                <legend>New Video: </legend>
                <li>add url:</li>
                  <input type='url' name='url' required autoFocus/><br/>
                <li>description</li>
                  <textarea rows="10" cols="60" type='text' name='description' required >
                  </textarea><br/>
                <button type="submit">Create</button>
              </fieldset>
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Link className='new_video_close_redirect' to='/'>
            <Button bsStyle='warning'>Home</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.video
  };
}

export default connect (mapStateToProps, { newVideoAsync })(NewVideo);

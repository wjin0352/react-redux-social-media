import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

const NewVideo = React.createClass({
  getInitialState () {
    return { showModal: true };
  },
  createVideo (e) {
    e.preventDefault();
    var form = e.target;
    var link_url = form.querySelector('[name="url"]').value;
    var description = form.querySelector('[name="description"]').value;
    var videoData = {
      link_url,
      description
    }
    var url = "http://localhost:8000/videos";
    console.log(videoData)
    this.props.newVideoAsync(videoData, url);
  },
  render: function () {
    return (
      <Modal show={this.state.showModal} bsSize="large" >
          <Modal.Header>
            <Modal.Title >
             Add a link
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='new-video-form' onSubmit={this.createVideo}>
              <fieldset>
                <legend>New Video: </legend>
                <li>add url:</li>
                  <input type='url' name='url' required /><br/>
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
    )
  }
});

export default NewVideo;

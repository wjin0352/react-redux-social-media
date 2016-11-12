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

  parseLink(link) {
    return link.replace('?v=', '').replace('watch', 'embed/');
  }

  createVideo(e) {
    e.preventDefault();
    var form = e.target;
    var videolink = this.parseLink(form.querySelector('[name="url"]').value);
    var description = form.querySelector('[name="description"]').value;
    var title = form.querySelector('[name="title"]').value;
    var videoData = {
      videolink,
      title,
      description
    }
    console.log('{}{}{}{}{}{}{ videolink', videolink)
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
            <form className='new-video-form' onSubmit={(e) => this.createVideo(e)}>
              <fieldset>
                <legend>New Video: </legend>
                <li>add url:</li>
                  <input type='url' name='url' required autoFocus/><br/>
                <li>add title:</li>
                  <input type='title' name='title' required /><br/>
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

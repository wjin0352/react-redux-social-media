import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPostAsync } from '../actions';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }

  createPost(e) {
    e.preventDefault();
    var form = e.target;
    var title = form.querySelector('[name="title"]').value;
    var post = form.querySelector('[name="blog_post"]').value;
    var postData = {
      title,
      content: post,
    }
    this.props.newPostAsync(postData);
  }

  render() {
    return (
      <Modal show={this.state.showModal} bsSize="large" >
          <Modal.Header>
            <Modal.Title>
              Add an article
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='new-post-form' onSubmit={(e) => this.createPost(e)}>
              <fieldset>
                <legend>New Article: </legend>
                <li>title</li>
                  <input type='text' name='title' required autoFocus /><br/>
                <li>Blog Article</li>
                  <textarea rows="30" cols="100" type='text' name='blog_post' required >
                  </textarea><br/>
                <button type="submit" value="done">Finished</button>
              </fieldset>
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Link className='new_post_close_redirect' to='/'>
            <Button bsStyle='warning'>Home</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
};

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps, { newPostAsync })(NewPost);

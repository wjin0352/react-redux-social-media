import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const NewPost = React.createClass({
  getInitialState () {
    return { showModal: true };
  },
  createPost (e) {
    e.preventDefault();
    var form = e.target;
    var title = form.querySelector('[name="title"]').value;
    var post = form.querySelector('[name="blog_post"]').value;
    var postData = {
      title,
      content: post,
      // userid: user
    }
    // console.log(user.id)
    var url = "http://localhost:8000/posts";
    this.props.newPostAsync(postData, url);
  },
  render: function () {
    return (
      <Modal show={this.state.showModal} bsSize="large" >
          <Modal.Header>
            <Modal.Title>
              Add a post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='new-post-form' onSubmit={this.createPost}>
              <fieldset>
                <legend>New Post: </legend>
                <li>title</li>
                  <input type='text' name='title' required /><br/>
                <li>Blog Post</li>
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
    )
  }
});

export default NewPost;

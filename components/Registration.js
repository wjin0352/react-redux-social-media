import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
const fetch = require('isomorphic-fetch');

const Registration = React.createClass({
  getInitialState () {
    return { showModal: true };
  },
  handleRegistration (e) {
    e.preventDefault();
    // use fetch to make api call to backend then dispatch action creator if you need.
    return function (userInfo) {
      // .post('/register', controller.registerUser)
      var url = 'http://localhost/8000/users/register';
      return fetch (url, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({userInfo})
      }).then(function (response) {
        if (response.status < 200 || response.status >= 300) {
          var error = new Error (response.statusText)
          error.response = response
          throw error;
        }
        return response.json({});
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  render: function () {
  return (
      <Modal show={this.state.showModal} >
        <Modal.Header>
          <Modal.Title>
            <h3>Please join us</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='register-form' onClick={this.handleRegistration}>
            <fieldset>
              <legend>Registration</legend>
              <li>user name: </li>
                <input type='text' name='username'/><br/>
              <li>email: </li>
                <input type='text' name='email'/><br/>
              <li>password: </li>
                <input type='text' name='password'/><br/>
              <input type="submit" value="done"/>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Link className='register_modal_close_redirect' to='/'>
            <Button bsStyle='warning'>Main Page</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    )
  }
});

export default Registration;

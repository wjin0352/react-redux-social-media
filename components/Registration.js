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
    // return function (formData) {
      // .post('/register', controller.registerUser)
      // console.log(this.refs.username.value);
      // console.log(this.refs.password.value);
      // console.log(this.refs.email.value);
      var formInput = {
        username: this.refs.username.value,
        password: this.refs.password.value,
        email: this.refs.email.value
      };
            console.log(formInput)

      var url = "http://localhost:8000/users/register";
      return fetch (url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formInput)
      }).then(function (response) {
        if (response.status < 200 || response.status >= 300) {
          var error = new Error (response.statusText)
          error.response = response
          throw error;
        }
        return response.json({data});
      }).then( (data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <form className='register-form' onSubmit={this.handleRegistration}>
            <fieldset>
              <legend>Registration</legend>
              <li>user name: </li>
                <input type='text' name='username' ref='username'/><br/>
              <li>email: </li>
                <input type='text' name='email' ref='email'/><br/>
              <li>password: </li>
                <input type='text' name='password' ref='password'/><br/>
              <button type="submit">submit</button>
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

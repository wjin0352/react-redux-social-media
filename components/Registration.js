import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
const fetch = require('isomorphic-fetch');
import { browserHistory } from 'react-router';

const Registration = React.createClass({
  getInitialState () {
    return { showModal: true };
  },
  handleRegistration (e) {
    e.preventDefault();
    // grab form input values
    var form = e.target;
    var user = form.querySelector('[name="username"]').value;
    var pass = form.querySelector('[name="password"]').value;
    var email = form.querySelector('[name="email"]').value;
    var formInput = {
      username: user,
      password: pass,
      email: email
    };
    var url = "http://localhost:8000/users/register";

    // use fetch to make api call to backend then dispatch an action creator if you need.
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
      return response.json();
    }).then( (results) => {
      console.log(results);
      // clientside redirect to home
      browserHistory.push( '/');
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
                <input type='text' name='username' ref='username' required /><br/>
              <li>email: </li>
                <input type='text' name='email' ref='email' required /><br/>
              <li>password: </li>
                <input type='text' name='password' ref='password' required /><br/>
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

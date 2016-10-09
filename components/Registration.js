import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

const Registration = React.createClass({
  getInitialState () {
    return { showModal: true };
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
          <form className='register-form'>
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
            <Button>Main Page</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    )
  }
});

export default Registration;

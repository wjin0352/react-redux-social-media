import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState () {
    return { showModal: true };
  },
  render: function() {
    return (
      <Modal show={this.state.showModal} >
          <Modal.Header>
            <Modal.Title>
              <h3>Sign in first</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='login-form'>
              <fieldset>
                <legend>Login: </legend>
                <li>username</li>
                  <input type='text' name='username'/><br/>
                <li>password</li>
                  <input type='text' name='password'/><br/>
                <input type="submit" value="done"/>
              </fieldset>
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Link className='login_modal_close_redirect' to='/'>
            <Button bsStyle='warning'>Close</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    )
  }
});

export default Login;

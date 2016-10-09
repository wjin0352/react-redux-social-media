import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState () {
    return { showModal: false };
  },
  close () {
    this.setState({ showModal: false });
  },
  open () {
    this.setState({ showModal: true });
  },
  render: function() {
    return (
      <container className='login-container'>
        <Modal.Dialog>
        <div className='login'>
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
        </div>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
        </Modal.Dialog>
      </container>
    )
  }
});

export default Login;

import React, { Component } from 'react';
import { loginUserAsync } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal:true };
  }

  handleLogin(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.querySelector('[name="username"]').value;
    var pass = form.querySelector('[name="password"]').value;

    var userCred = {
      username: name,
      password: pass
    }
    var url = "http://localhost:8000/users/login";
    this.props.loginUserAsync(userCred, url);
  }

  render() {
    return (
      <Modal show={this.state.showModal} >
          <Modal.Header>
            <Modal.Title>
              <h3>Sign in first</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='login-form' onSubmit={this.handleLogin.bind(this)}>
              <fieldset>
                <legend>Login: </legend>
                <li>username</li>
                  <input type='text' name='username' required /><br/>
                <li>password</li>
                  <input type='password' name='password' required /><br/>
                <button type="submit" value="done">Login</button>
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
};

function mapStateToProps(state) {
  return {
    login_user: state.login
  }
}

export default connect(mapStateToProps, { loginUserAsync })(Login);

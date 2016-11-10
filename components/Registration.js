import React, { Component } from 'react';
import { registerUserAsync } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }

  handleRegistration (e) {
    e.preventDefault();
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
    // this.props.dispatch(actions.registerUserAsync (formInput, url));
    this.props.registerUserAsync(formInput, url);
  }

  render() {
    return (
      <Modal show={this.state.showModal} >
        <Modal.Header>
          <Modal.Title>
            <h3>Please join us</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='register-form' onSubmit={this.handleRegistration.bind(this)}>
            <fieldset>
              <legend>Registration</legend>
              <li>user name: </li>
                <input type='text' name='username' ref='username' required autoFocus/><br/>
              <li>email: </li>
                <input type='email' name='email' ref='email' required /><br/>
              <li>password: </li>
                <input type='password' name='password' ref='password' required /><br/>
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
    );
  }
}

function mapStateToProps(state) {
  return {
    register_user: state.register
  };
}

export default connect (mapStateToProps, { registerUserAsync })(Registration);

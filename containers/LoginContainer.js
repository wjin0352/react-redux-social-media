import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
    login_user: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserAsync: (userCred, url) => {
      dispatch(actions.loginUserAsync(userCred, url))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
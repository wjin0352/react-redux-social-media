import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Registration from '../components/Registration';

const mapStateToProps = (state) => {
  return {
    register_user: state.register
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUserAsync: (formInput, url) => {
      dispatch(actions.registerUserAsync(formInput, url))
    }
  }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;


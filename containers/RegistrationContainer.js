import React from 'react';
import * actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Registration from '../components/Registration';

const mapStateToProps = (state) => {
  console.log('state is ', state);
  return {
    register_user: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRegister: (user_info) => {
      dispatch(actions.registerUser(user_info))
    }
  }
}


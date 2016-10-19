import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

const mainPageContainer = connect(mapStateToProps)(MainPage);

export default mainPageContainer;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class MainPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.login.user
  };
}

export default connect(mapStateToProps)(MainPage);

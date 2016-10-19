import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

const MainPage = React.createClass({
  render: function () {
    // console.log('user: ', this.props.user)
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
}
});

export default MainPage;

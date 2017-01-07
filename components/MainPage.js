import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InfoModal from './InfoModal';

class MainPage extends Component {
  componentWillMount(){
    $(document).ready(function() {
      console.log('ready')
      $(".what").click(function(){
        $("div.overlay").fadeIn(1000);
      });

      $("a.close").click(function(){
        $("div.overlay").fadeOut(1000);
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        <InfoModal />
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

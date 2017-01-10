import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InfoModal from './InfoModal';
import Footer from './Footer';

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

      // this line just initializes all popover messages, for detail refer to bootstrap popovers
      $('[data-toggle="popover"]').popover();
      // scrolling fade
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        <InfoModal />
        <Footer />
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

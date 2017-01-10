import React, { Component } from 'react';
import { logOutUser } from '../actions';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { Button, ButtonGroup, Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  logOut() {
    this.props.logOutUser();
  }

  loginAndRegistrationDropDown() {
    return (
      <NavDropdown eventKey={7} title="Sign in" id="basic-nav-dropdown">
        <MenuItem eventKey={7.1}>
          <Link className='register_link' to='/registration' >Register</Link>
          </MenuItem>
        <MenuItem eventKey={7.2}>
          <Link className='login_link' to='/login'>Login</Link>
        </MenuItem>
      </NavDropdown>
    );
  }

  logOutButton() {
    return (
      <NavItem eventKey={8}>
        <Link className='log_out' onClick={() => this.logOut()}>Log Out</Link>
      </NavItem>
    );
  }

  render() {
    return (
      <Navbar bsStyle='inverse' id="top">
        <Navbar.Header>
          <Navbar.Brand>
            Social Media Blog
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link className='home_link' to="/">Home</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link className='community_posts' to="/show_posts">Posts</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link className='community_videos' to="/show_videos">Videos</Link>
          </NavItem>
          <NavItem eventKey={6}>
            <Link className='new_post_link' to="/new_post">New Article</Link>
          </NavItem>
          <NavItem eventKey={7}>
            <Link className='new_video_link' to="/new_video">New Video</Link>
          </NavItem>
          { !(this.props.logged_user.user) ? this.loginAndRegistrationDropDown() : console.log('') }
          { this.props.logged_user.user ? this.logOutButton() : '' }
          <NavItem eventKey={8}>
            <li><a className="what" id="what" href="#" >Start Here!</a></li>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

// adding features later
// <NavItem eventKey={4}>
//   <Link className='posts_link' to='/show_user_posts' >Your Posts</Link>
// </NavItem>
// <NavItem eventKey={5}>
//   <Link className='videos_link' to='/show_user_videos' >Your Videos</Link>
// </NavItem>

function mapStateToProps(state) {
  return {
    logged_user: state.login
  };
}

export default connect(mapStateToProps, {logOutUser})(Navigation);

import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, ButtonGroup, Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

const Navigation = React.createClass({
  render: function () {
    return (
      <Navbar bsStyle='inverse'>
        <Navbar.Header>
          <Navbar.Brand>
            Social Media Blog
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <IndexLink className='home_link' to="/">Home</IndexLink>
          </NavItem>
          <NavItem eventKey={2}>
            <Link className='posts_link' to='/show_posts' >Posts</Link>
          </NavItem>
          <NavItem eventKey={3}>
            <Link className='videos_link' to='/show_videos' >Videos</Link>
          </NavItem>
          <NavItem eventKey={4}>
            <IndexLink className='new_post_link' to="/new_post">New Post</IndexLink>
          </NavItem>
          <NavItem eventKey={5}>
            <IndexLink className='new_video_link' to="/new_video">New Video</IndexLink>
          </NavItem>
          <NavDropdown eventKey={6} title="Sign in" id="basic-nav-dropdown">
            <MenuItem eventKey={6.1}>
              <Link className='register_link' to='/registration' >Register</Link>
              </MenuItem>
            <MenuItem eventKey={6.2}>
              <Link className='login_link' to='/login' >Login</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
});

export default Navigation;

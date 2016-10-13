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
            <Link className='videos_link' to='/show_videos' >Videos</Link>
          </NavItem>
          <NavDropdown eventKey={3} title="Sign in" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <Link className='register_link' to='/registration' >Register</Link>
              </MenuItem>
            <MenuItem eventKey={3.2}>
              <Link className='login_link' to='/login' >Login</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
});

export default Navigation;

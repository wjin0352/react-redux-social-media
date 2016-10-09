import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';

const Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <ButtonGroup>
          <IndexLink className='home_link' to="/"><Button bsStyle='default'>Home</Button></IndexLink>
          <Link className='videos_link' to='/videos' ><Button>Videos</Button></Link>
          <Link className='register_link' to='/registration' ><Button>Register</Button></Link>
          <Link className='login_link' to='/login' ><Button>Login</Button></Link>
        </ButtonGroup>
      </nav>
    )
  }
});

export default Navigation;

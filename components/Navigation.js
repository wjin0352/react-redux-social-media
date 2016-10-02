import React from 'react';
import { Link } from 'react-router';

const Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <ul>
          <li>
            <Link className='videos_link' to='/videos' >Videos</Link>
          </li>
          <li>
            <Link className='register_link' to='/registration' >Register</Link>
          </li>
          <li>
            <Link className='login_link' to='/login' >Login</Link>
          </li>
        </ul>
      </nav>
    )
  }
});

export default Navigation;

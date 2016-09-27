import React from 'react';

const Navigation = React.createClass({
  handleClickVideos: function () {

  },
  handleClickRegister: function () {

  },
  handleClickLogin: function () {

  },
  render: function () {
    return (
      <nav>
        <ul>
          <li>
            <a className='videos_link' href='#' onClick={this.handleClickVideos}>Videos</a>
          </li>
          <li>
            <a className='register_link' href='#' onClick={this.handleClickRegister}>Register</a>
          </li>
          <li>
            <a className='login_link' href='#' onClick={this.handleClickLogin}>Login</a>
          </li>
        </ul>
      </nav>
    )
  }
});

export default Navigation;

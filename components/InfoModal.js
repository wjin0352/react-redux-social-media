import React, { Component } from 'react';

class InfoModal extends Component {
  render() {
    return (
      <div className="overlay" id="modal">
        <div className="content">
          <h3>How do I use this app?</h3>
          <div>
            <p>This is a social media site where you can share videos and blog posts with the whole community. It was built on Node and Express.js along  with React and Redux for the client side.  Here are some quick directions to get you started on this site! </p>
            <ul>
              <li>1. Start by creating an account or signing in on the navbar <strong>"sign in"</strong>.  For a quick demo just sign in at the top with username: user1 password: user1</li>
              <li>2. Once logged you can create new article or video posts for all to see.</li>
              <li>3. The home page where you started has all the community posts and videos available.  This is a social site so all posts are shared.  You may edit only your own posts but you can comment on each others.</li>
            </ul>
            <p>So, Are you ready?</p>
            <a className="close" id="close" href="#" >Got It!</a>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoModal;

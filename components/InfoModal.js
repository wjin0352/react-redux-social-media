import React, { Component } from 'react';

class InfoModal extends Component {
  render() {
    return (
      <div className="overlay" id="modal">
        <div className="content">
          <h3>How do I use this app?</h3>
          <div>
            <p>This is a social media site where you can share videos and blog posts. It was built on Node Express with React Redux for the client side:  Here are some quick directions to get you started on this site! </p>
            <ul>
              <li>1. Start by registering or logging in by clicking on the top right of the navbar under <strong>"sign in"</strong>, create a user name and password ( For now you can use <strong>"user1"</strong> as both username and password for logging in. )</li>
              <li>2. Once logged in you will have access to the navigation bar so you can create new video posts and blog articles. Click on <strong>New Article</strong> or <strong>New Video</strong> to create a new post.</li>
              <li>3. The home page where you started has all the community posts and videos available.  This is a social site so all posts are shared.  You may edit only your own posts and you may comment on each others.</li>
            </ul>
            <p>So, Are you ready?</p>
            <a className="close" href="#" >Got It!</a>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoModal;

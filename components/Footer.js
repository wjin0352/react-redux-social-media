import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='page-foot' id='contact'>
        <div className="btm-bar">
          <div className="footer-container">
            <p className="company-outro">Thanks for visiting!</p>
            <p id="email">wjin0352@gmail.com</p>
              <div className="foot">
                <a className="btn btn-social-icon btn-linkedin" target="_blank" href="https://www.linkedin.com/in/wonyong">
                  <span className="fa fa-linkedin"></span>
                </a>
                <a className="btn btn-social-icon btn-github" target="_blank" href="https://github.com/wjin0352/">
                  <span className="fa fa-github"></span>
                </a>
              </div>
          </div>
        </div>
        <p><a href="#top" id="top">Top</a></p>
      </footer>
    );
  }
};

export default Footer;

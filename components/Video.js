import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

const Video = React.createClass({
  render: function () {
    return (
      <div className='videos'>
      <h3></h3>
        <iframe className='iframe-video'
          src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB">
        </iframe>
      </div>
    )
  }
})

export default Video;

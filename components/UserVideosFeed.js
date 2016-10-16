import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

const UserVideosFeed = React.createClass({
  render: function () {
    return (
      <div className='user_videos_feed'>
        <h3>Videos Feed</h3>
        <Grid>
            <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>with pic</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <iframe className='iframe-video'
                  src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB">
                </iframe>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            </Row>
          </Grid>
        <iframe className='iframe-video'
          src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB">
        </iframe>
      </div>
    )
  }
});

export default UserVideosFeed;

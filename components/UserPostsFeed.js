import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Post from './Post';

const UserPostsFeed = React.createClass({
  render: function () {
    return (
      <div className='user_posts_feed'>
        <h3>Posts Feed </h3>
        <Grid>
            <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="" alt="242x200">
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
      </div>
    )
  }
});

export default UserPostsFeed;

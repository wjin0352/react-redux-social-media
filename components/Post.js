import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class Post extends Component {
  render() {
    return (
      <div>
        <container className='post-container'>
          <Jumbotron bsStyle='post'>
            <h3>title</h3>
            <p>
              {this.props}
            </p>
            <h1>{this.props.params.id}</h1>
            <div className="jumbotron-buttons">
              <Button bsStyle="primary">edit</Button>
              <Button bsStyle="primary">delete</Button>
            </div>
          </Jumbotron>
        </container>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Post);
export default Post;

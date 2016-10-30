import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

class Post extends Component {

  render () {
    return (
      <container className='post-container'>
        <Jumbotron bsStyle='post'>
          <h3>title</h3>
          <p>
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          </p>
          <h1>this.props.params.id</h1>
          <div className="jumbotron-buttons">
            <Button bsStyle="primary">edit</Button>
            <Button bsStyle="primary">delete</Button>
          </div>
        </Jumbotron>
      </container>
    );
  }
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Post);

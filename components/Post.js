import React from 'react';

const Post = React.createClass({
  render: function () {
    return (
      <container className='post-container'>
        <div className='post-div'>
          <p>
          {this.props.params.id}
          </p>
        </div>
      </container>
    );
  }
})

export default Post;

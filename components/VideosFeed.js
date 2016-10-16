import React from 'react';
import Video from './Video';

// NO LOGGED IN USER .. All Videos random feed
const VideosFeed = React.createClass({
  // var videos =
  render: function () {
    return (
      <Video />
    )
  }
})

export default VideosFeed;

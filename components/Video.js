import React from 'react';

const Video = React.createClass({
  render: function () {
    return (
      <div className='videos'>
        <iframe className='iframe-video'
          src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB">
        </iframe>
      </div>
    )
  }
})

export default Video;

// <div style={{width: 660, height: 'auto'}}>
//     <ResponsiveEmbed a16by9>
//       <embed type="image/svg+xml" src="/assets/TheresaKnott_castle.svg" />
//     </ResponsiveEmbed>
//   </div>

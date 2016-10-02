import React from 'react';

const Video = () => {
  return (
    <div className='video embed-responsive embed-responsive-16by9'>
      <iframe width="420" height="315" className='embed-responsive-item'
        src="https://www.youtube.com/embed/watch?v=_lGYG_s_yTM&index=1&list=PLEKIsm9AjY8LfH5cYnhJE-L5A7NWis6qB">
      </iframe>
    </div>
  )
}

export default Video;

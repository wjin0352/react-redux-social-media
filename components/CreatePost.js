import React from 'react';

const CreatePost = () => {
  return (
    <div className='post-form-div'>
      <form className='post-form'>
        <fieldset>
          <legend>New Post</legend>
          <textarea rows='30' cols='100' placeholder='Say something..'></textarea>
          <input type='submit' value='post'/>
        </fieldset>
      </form>
    </div>
  )
}

export default CreatePost;

import React from 'react';

const Registration = () => {
  return (
    <container className='registration-container'>
      <div className='registration'>
        <h3>Please join us</h3>
        <form className='register-form'>
          <fieldset>
            <legend>Registration</legend>
            <li>user name: </li>
              <input type='text' name='username'/><br/>
            <li>email: </li>
              <input type='text' name='email'/><br/>
            <li>password: </li>
              <input type='text' name='password'/><br/>
            <input type="submit" value="done"/>
          </fieldset>
        </form>
      </div>
    </container>
  )
};

export default Registration;

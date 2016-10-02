import React from 'react';

const Login = () => {
  return (
    <div className='login'>
      <h3>Log please</h3>
        <form className='login-form'>
          <fieldset>
            <legend>Login: </legend>
            <li>username</li>
              <input type='text' name='username'/><br/>
            <li>password</li>
              <input type='text' name='password'/><br/>
            <input type="submit" value="done"/>
          </fieldset>
        </form>
    </div>
  )
}

export default Login;



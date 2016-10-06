import React from 'react';

const Login = () => {
  return (
    <container className='login-container'>
      <div className='login'>
        <h3>Sign in first</h3>
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
    </container>
  )
}

export default Login;

import React from 'react'
import classes from './login.module.css';


const Login = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mt-5'>login</h1>

      <p style={{ color: 'blue', fontsize: 30, textAlign: 'center' }}>welcome</p>
      <label htmlFor="">some label</label>
      <input type="text" />
      <hr />
      <br />

      <button className='btn'>home button</button>
      <button className={classes.loginBtn}>login button</button>

    </div>
  )
}

export default Login;
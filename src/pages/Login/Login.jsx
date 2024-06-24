import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='loginlogo'/>
      <div className="loginform"></div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'

const Login = () => {

  const[signState, setSignState]=useState("Sign In")
  const [name , setName]=useState("");
  const [email , setemail]=useState("");
  const [password , setpass]=useState("");

  const user_auth = async (event)=>{
    event.preventDefault();
    if (signState==="Sign In"){
      await login (email,password);
    }else{
      await signup(name,email,password)
    }
  }


  return (
    <div className='login'>
      <img src={logo} alt="" className='loginlogo'/>
      <div className="loginform">
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up" ?<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Yourname'/>:<></>}
          <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Email'/>
          <input type="text" value={password} onChange={(e)=>{setpass(e.target.value)}} placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="formswitch">
          {signState==="Sign In"?<p>New To Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already Have accoutn?<span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login

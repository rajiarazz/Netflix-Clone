import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
      <form action="">
        <h2>{signState}</h2>
        {signState==="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
        
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>{signState}</button>
        <div className="help">
          <div className="remember">
            <input type="checkbox" name="remember" id="" />
            <p>Remember Me</p>
          </div>
          <p className="need-help">Need Help?</p>
        </div>

      </form>
      <div className="form-switch">
        {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{
          setSignState("Sign Up")
        }}> Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{
          setSignState("Sign In")
        }}> Sign In Now</span></p>}
        
        
      </div>
      </div>
    </div>
  )
}

export default Login
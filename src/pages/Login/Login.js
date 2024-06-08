import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import { ColorRing } from 'react-loader-spinner'
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoding] = useState(false)

  // user authentication
  const user_auth = async(event)=>{
    event.preventDefault();
    setLoding(true);
      if(signState==="Sign In"){
        await login(email, password)
      }else{
        await signup(name, email, password)
      }
     setLoding(false);
    
  }
  return (
    
    loading?<div className="login-spinner"><ColorRing
    visible={true}
    height="60"
    width="60"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    /></div>:
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
      <form onSubmit={user_auth}>
        <h2>{signState}</h2>
        {signState==="Sign Up"?<input value={name} onChange={(e)=>{
          setName(e.target.value)
        }}type="text" placeholder='Your name' />:<></>}
        
        <input value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} type="email" placeholder='Email' />
        <input value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} type="password" placeholder='Password' />
        <button type='submit'>{signState}</button>
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
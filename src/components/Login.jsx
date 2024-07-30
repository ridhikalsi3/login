import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
        <input type="text" placeholder="UserName" />
        </div>
        <div className="input">
        <input type="password" placeholder="password" />
        </div>
        </div>
        <div className="forgot-password">forgot password? <span>Click here!</span></div>
        <div className="submit-container">
            <div className="submit">sign up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}
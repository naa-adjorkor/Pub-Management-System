import React from 'react'
import './Signup.css'
import bg from './../../images/bg.jpg'



export const Signup = () => {
  return (
    <>
    <div className='signup-container'>
      <div className='signup-box'>
        <div className='signup-image'>
          <img src={bg} alt="logo"/>
        </div>
        <div className='signup-form'>
          <h2>Sign Up</h2>
          <form>
            <label>Email</label>
            <input type='email' placeholder='bernice@gmail.com'/>
            <label>Email</label>
            <input type='email' placeholder='bernice@gmail.com'/>
            <label>Email</label>
            <input type='email' placeholder='bernice@gmail.com'/>
            <label>Email</label>
            <input type='email' placeholder='bernice@gmail.com'/>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

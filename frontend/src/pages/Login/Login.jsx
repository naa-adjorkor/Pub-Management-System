import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <>
    <div>Log in</div>
    <p>Don't have an account?<Link to='/Signup'>Signup</Link></p>
    </>
  )
}

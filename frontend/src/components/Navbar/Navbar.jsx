import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            {/*<img src={} alt='logo'/>*/}
            <p>LOGO</p>
        </div>
        <ul className='navbar-links'>
            <li className='link-items'><a href='#home'>Home</a></li>
            <li className='link-items'><a href='#about'>About</a></li>
            <li className='link-items'><a href='#menu'>Menu</a></li>
            <li className='link-items'><a href='#contact'>Contact</a></li>
        </ul>
            <button className='navbar-signup'>
            <a href='#signup'>Sign Up</a>
            </button>
    </nav>
  )
}

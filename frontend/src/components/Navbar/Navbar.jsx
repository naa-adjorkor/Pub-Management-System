import React, { useState } from 'react'
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

export const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false)
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
        
        
        <div className="navbar-smallscreen">
            <GiHamburgerMenu color='#ffffff' fontSize={28} onClick={() =>setToogleMenu(true)}/>

            {toogleMenu && (
                <div className='navbar-smallscreen__overlay slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={28} className='overlay__close' onClick={() =>setToogleMenu(false)}/>
                    <ul className='navbar-smallscreen-links'>
                        <li className='link-items'><a href='#home'>Home</a></li>
                        <li className='link-items'><a href='#about'>About</a></li>
                        <li className='link-items'><a href='#menu'>Menu</a></li>
                        <li className='link-items'><a href='#contact'>Contact</a></li>
                    </ul>
                    <button className='navbar-smallscreen-signup'>
                        <a href='#signup'>Sign Up</a>
                    </button>
                </div>
            )}
        </div>
    </nav>
  )
}

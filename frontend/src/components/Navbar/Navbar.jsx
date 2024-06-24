import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import pubLogo from './../../assets/pub_logo.png';
import './Navbar.css';


export const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false)
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <img src={pubLogo} alt='logo'/>
        </div>
        <ul className='navbar-links'>
            <li className='p__opensans link-items'><Link to='/Home'>Home</Link></li>
            <li className='p__opensans link-items'><Link to='/About'>About</Link></li>
            <li className='p__opensans link-items'><Link to='/Menu'>Menu</Link></li>
            <li className='p__opensans link-items'><Link to='/Contact'>Contact</Link></li>
        </ul>
        <button className='navbar-signup p__opensans'>
            <a href='/Signup'>Sign Up</a>
        </button>
        
        
        <div className="navbar-smallscreen">
            <GiHamburgerMenu color='#ffffff' fontSize={28} onClick={() =>setToogleMenu(true)}/>

            {toogleMenu && (
                <div className='navbar-smallscreen__overlay slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={28} className='overlay__close flex__center' onClick={() =>setToogleMenu(false)}/>
                    <ul className='navbar-smallscreen-links'>
                        <li className='p__opensans link-items'><Link to='/Home'>Home</Link></li>
                        <li className='p__opensans link-items'><Link to='/About'>About</Link></li>
                        <li className='p__opensans link-items'><Link to='/Menu'>Menu</Link></li>
                        <li className='p__opensans link-items'><Link to='/Contact'>Contact</Link></li>
                    </ul>
                    <div className='navbar-smallscreen-button'>
                    <button className='navbar-smallscreen-signup p__opensans'>
                        <Link to='/Signup'>Sign Up</Link>
                    </button>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

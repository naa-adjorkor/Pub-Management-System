import React from 'react'
import { Link } from 'react-router-dom'
import pubLogo from './../../assets/pub_logo.png'
import './SubSection.css'

export const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding'>
        <div className="aboutus_img flex__center">
            <img src={pubLogo} alt='bg'/>
        </div>

        <div className='aboutus-content flex__center'>
            <div className='aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <hr className='underline'/>
                <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sequi molestias veritatis quisquam, minima, odit nemo dicta excepturi perspiciatis repudiandae provident reprehenderit tempore beatae nulla perferendis, voluptatibus enim. Consectetur, natus.</p>
                <button type='button' className='custom__button' style={{backgroundColor:'var(--color-red)',marginTop:'5px'}}><Link to='/About'>Read More</Link></button>
            </div>
            

        </div>

    </div>
  )
}

import React from 'react'
import pubLogo from './../../images/pub_logo.png'


export const AboutUs = () => {
  return (
    <div className='aboutus app__bg flex__center section__padding'>
        <div className="flex__center">
            <img src={pubLogo} alt='bg'/>
        </div>

        <div className='aboutus-content flex__center'>
            <div className='aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <hr className='underline'/>
                <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sequi molestias veritatis quisquam, minima, odit nemo dicta excepturi perspiciatis repudiandae provident reprehenderit tempore beatae nulla perferendis, voluptatibus enim. Consectetur, natus.</p>
                <button type='button' className='custom__button'>Read More</button>
            </div>
            

        </div>

    </div>
  )
}

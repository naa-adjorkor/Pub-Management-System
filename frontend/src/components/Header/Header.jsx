import React from 'react'
import './Header.css'
import {SubHeading} from '../SubHeading/SubHeading'
import logo from './../../images/bg.jpg'

export const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info section__padding">
            <SubHeading/>
            <h1 className='header-h1 '>Where music lives</h1>
            <p className='p__opensans header-info' style={{margin:'1rem 0'}}>
              Join us and together let's create unforgettable memories.Every visit promises to be an unforgettable experience.Come raise a glass and make memories that last a lifetime at George's Pub. 
            </p>

            <div>
              <button className='custom__button btn-red'>View Menu</button>
              <button className='custom__button btn-yellow'>Book A Table</button>
            </div>

        </div>

        <div className="app__wrapper_img">
              <img src={logo} alt='welcome'/>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () =>{
    setIsExpanded(!isExpanded);
  }
  return (
    <>
    <Navbar/>
    <div>
      <h2>About Us</h2>
      
    </div>
    </>
  )
}

import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { AboutUs } from '../../components/SubSections/AboutUs'
import { SpecialMenu } from '../../components/SubSections/SpecialMenu'
import { Intro } from '../../components/SubSections/Intro'

export const Landing = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <Intro/>
    </>
  )
}

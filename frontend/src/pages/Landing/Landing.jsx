import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { About } from '../About/About'

export const Landing = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
    </>
  )
}

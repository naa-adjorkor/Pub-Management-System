import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Landing } from '../src/pages/Landing/Landing';
import {Home} from '../src/pages/Home/Home';
import {Menu} from '../src/pages/Menu/Menu';
import {About} from '../src/pages/About/About';
import {Contact} from '../src/pages/Contact/Contact';
import {Signup} from '../src/pages/Signup/Signup';
import {Login} from '../src/pages/Login/Login';

import  './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import '../css/nav.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <h1>Face Join</h1>
        <div className='switch-container'>
            <BsFillMoonFill/>
            <div className='switch'></div>
            <BsFillSunFill/>
        </div>
    </div>
  )
}

export default Navbar
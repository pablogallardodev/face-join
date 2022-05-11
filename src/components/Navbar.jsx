import React from 'react'

import '../css/nav.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <h1>Face Join</h1>
        <div className='switch-container'>
            🌙 <div className='switch'></div> 🌞
        </div>
    </div>
  )
}

export default Navbar
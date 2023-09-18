import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png"

function navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>

        </div>
        <button className='desktopMenuBtn'>
        <img src='' alt='' className='desktopMenuImg'/>
        Contact Me
        </button>
    </nav>
  )
}

export default navbar
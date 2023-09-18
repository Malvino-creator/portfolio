import React from 'react'
import "./navbar.css";
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";

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
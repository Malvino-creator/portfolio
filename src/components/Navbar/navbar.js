import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import Contact from "../../assets/contact.png";

function navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenuList">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">CV</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={Contact} alt="contact" className="desktopMenuImg" />
        Contact Me<br/>
        Leave a Beep!<br/>
        Message
      </button>
    </nav>
  );
}

export default navbar;

import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png"
import {Link} from "react-scroll";

function intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello, </span>
        <span className='"intro text'>
          I'm <span className="introName"> Malvin </span> <br /> Website Designer
        </span>
        <p className="introParag"> I am a skilled web designer with experience in creating visually<br/> appealling and user friendly websites. </p>
        <Link><button className="btn"><img src={btnImg} alt="hireme" className="btnImg" /> Hire Me </button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default intro;

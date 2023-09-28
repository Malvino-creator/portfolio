import React from "react";
import "./intro.css";
// import bg from "../../assets/image.png";
import {Link} from "react-scroll";

function intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello, </span>
        <span className='"intro text'>
          I'm <span className="introName"> Malvin </span> <br /> Website Developer
        </span>
        <p className="introParag"> I am a skilled web designer with experience in creating<br/>
        visually appealling and user friendly websites. </p>
        <Link><button type="button" className="btn"> Portfolio </button></Link>
      </div>
      
    </section>
  );
}

export default intro;

import React from 'react';
import "./skill.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function skill() {
  return (
    <section id='skills'>
        <span className='skillTitle'> What I do</span>
        <span className='skillDescription'> I am a skilled and passionate web sesigner with experience in creating visually appealling and user friendly websites.<br />
         I have a good understanding of design and posses a keen eye for detail. I am also proficient in HTML, CSS, Ruby and JavaScript<br/>
          as well as Frontend and Backend frameworks such as React and Ruby on Rails.</span>
          <div className='skillBars'>
            <div className='skillBar'>
            <img src='' alt=''></img>
            <div className='skillBarText'>
                <h2></h2>
                <p></p>
            </div>
            </div>
          </div>
    </section>
  )
}

export default skill
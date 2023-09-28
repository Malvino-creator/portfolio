import React from "react";
import "./skill.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function skill() {
  return (
    <section id="skills">
      <span className="skillTitle"> About Me </span>
      <div className="skill-text"> 
      <span className="skillDescription">
        I am a skilled and passionate web designer with experience in
        <br />
        creating visually appealling and user friendly websites.
        <br />I have a good understanding of design and posses a keen eye
        <br />
        for detail. I am also proficient in HTML, CSS, Ruby and JavaScript
        <br />
        as well as Frontend and Backend frameworks such as React and Ruby on
        Rails.
      </span>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="uidesign" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Ensure visual appeal and interface
           laying focus on overall user experience to ensure user-friendly products.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="webdesign" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2> Website Development</h2>
            <p>
              Shape the digital experiences users
              have
              <br />
              when accessing information or services on the
              internet.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="appdesign" className="skillBarImg"></img>
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              Meeting demands of modern consumers and
              businesses through efficient and user-friendly mobile and software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skill;

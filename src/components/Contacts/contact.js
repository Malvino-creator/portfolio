import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";

function contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDescription">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable startups I have worked with includes
        </p>
        <div className="clientImages">
          <img src={Walmart} alt="clientImage" className="clientImage" />
          <img src={Adobe} alt="clientImage" className="clientImage" />
          <img src={Microsoft} alt="clientImage" className="clientImage" />
          <img src={Facebook} alt="clientImage" className="clientImage" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">
            Contact Me </h1>
            <span className="contactPageTitle">
            Please fill out the form below to discuss work prospects
            </span>
            <form className="contactForm">
                <input type="text" placeholder="Your Name" className="name"/>
                <input type="email" placeholder="Your Email" className="email"/>
                <textarea className="message" name="message" rows={5} placeholder="Your Message"></textarea>
            </form>
      </div>
    </section>
  );
}

export default contact;

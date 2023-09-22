import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";

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
        <h1 className="contactPageTitle">Contact Me </h1>
        <span className="contactPageParag">
          Please fill out the form below to discuss work prospects, critic or
          consult.
        </span>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" className="name" />
          <input type="email" placeholder="Your Email" className="email" />
          <textarea
            className="message"
            name="message"
            rows={6}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn" value="send">
            Submit
          </button>
          <div className="socialLinks">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            <img src={InstagramIcon} alt="instagram" className="link" />
            <img src={YoutubeIcon} alt="youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default contact;

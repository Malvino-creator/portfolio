import React from "react";
import "./contact.css";



function contact() {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Let's Chat </h1>
        <span className="contactPageParag">
          Please fill out the form below to discuss work prospects, critic or
          consult.
        </span>
        <div className="form-container">
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
        </form>
        </div>
        
      </div>
    </section>
  );
}

export default contact;

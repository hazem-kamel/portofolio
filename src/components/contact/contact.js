import React from "react";
import "./contact.css";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element id="contact" name="contact">
      <div className="contact-section">
        <form className="form">
          <h2>Contact</h2>
          <p>Have a question or want to work together?</p>
          <input placeholder="Name" type="text" className="name" />
          <input placeholder="Enter Email" type="email" className="email" />
          <textarea
            placeholder="Your Message"
            className="message"
            rows="3"
          ></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </Element>
  );
};
export default Contact;

import React, { useState, useEffect } from "react";
import "./contact.css";
import * as emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [visitorData, updateVisitorData] = useState();
  useEffect(() => {
    fetch(
      "https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91",
      { method: "GET", headers: {} }
    )
      .then((res) => {
        return res.json();
      })
      .then((ip) => sendingData(ip));
  }, []);
  const sendingData = (data) => {
    let details = {
      country: data.country_name,
      ip: data.IPv4,
    };
    emailjs.send("gmail", "ip", details, "user_TC2FlEFLqJjVxtD0jMogs");
  };
  const createNotification = (type) => {
    return () => {
      NotificationManager.success(
        "Your message sent successfully",
        "Message Recieved",
        3000
      );
    };
  };
  const onSubmit = (data) => {
    let templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    emailjs
      .send(
        "gmail",
        "template_t6npct8u",
        templateParams,
        "user_TC2FlEFLqJjVxtD0jMogs"
      )
      .then(document.getElementById("form").reset())
      .then(createNotification());
  };

  return (
    <Element id="contact" name="contact">
      <div className="contact-section">
        <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Contact</h2>
          <p>Have a question or want to work together?</p>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span style={{ color: "white" }}>This field is required</span>
          )}
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            className="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span style={{ color: "white" }}>This field is required</span>
          )}
          <textarea
            placeholder="Your Message"
            className="message-text"
            rows="3"
            id="message-text"
            name="message"
            ref={register({ required: true })}
          ></textarea>
          {errors.message && (
            <span style={{ color: "white" }}>This field is required</span>
          )}
          <button className="submit-button">Submit</button>
        </form>
        <NotificationContainer />
      </div>
    </Element>
  );
};
export default Contact;

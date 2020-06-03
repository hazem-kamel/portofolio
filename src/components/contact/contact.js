import React from "react";
import "./contact.css";
import * as emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    let templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    emailjs.send(
      "gmail",
      "template_t6npct8u",
      templateParams,
      "user_TC2FlEFLqJjVxtD0jMogs"
    );
  };

  return (
    <Element id="contact" name="contact">
      <div className="contact-section">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            className="message"
            rows="3"
            name="message"
            ref={register({ required: true })}
          ></textarea>
          {errors.message && (
            <span style={{ color: "white" }}>This field is required</span>
          )}
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </Element>
  );
};
export default Contact;

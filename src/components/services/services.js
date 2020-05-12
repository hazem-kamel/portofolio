import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div className="services">
      <h2>MY SERVICES</h2>
      <div className="services-section">
        <div className="frontend">
          <i class="far fa-file-code"></i>
          <h3>Frontend Development</h3>
          <h5>Responsive and Fast</h5>
          <p>
            A website should be designed for the people who will use it, so
            that's exactly what I do. User focused design should be the primary
            goal of any website with the ability to work across all devices and
            to be fast as possible..
          </p>
        </div>
        <div className="backend">
          <i class="fas fa-file-code"></i>
          <h3>Backend Development</h3>
          <h5>Well Designed , Secure and Efficient </h5>
          <p>
            Every website should be built with two primary goals: Firstly, it
            needs to be Efficient. Secondly, it needs to be secure as possible.
          </p>
        </div>
      </div>
      <div className="skills">
        <i class="fas fa-laptop-code"></i>
        <h3>Skills</h3>
        <div className="skills-cards">
          <div>
            <img
              alt="JS"
              title="JS"
              src={require("../../static/images/js.png")}
            ></img>
            <img
              alt="React"
              title="React"
              src={require("../../static/images/react.png")}
            ></img>
            <img
              alt="Redux"
              title="Redux"
              src={require("../../static/images/redux.jpg")}
            ></img>
          </div>
          <div>
            <img
              alt="HTML"
              title="HTML"
              src={require("../../static/images/html.jpg")}
            ></img>
            <img
              alt="CSS"
              title="CSS"
              src={require("../../static/images/css.jpg")}
            ></img>
            <img
              alt="API"
              title="API"
              src={require("../../static/images/api.png")}
            ></img>
          </div>
          <div>
            <img
              alt="NODE"
              title="NODE"
              src={require("../../static/images/node.png")}
            ></img>
            <img
              alt="Mongo"
              title="Mongo"
              src={require("../../static/images/mongo.jpeg")}
            ></img>
            <img
              alt="Bcrypt"
              title="Bcrypt"
              src={require("../../static/images/hash.jpg")}
            ></img>
          </div>
          <div>
            <img
              alt="Express"
              title="Express"
              src={require("../../static/images/express.png")}
            ></img>
            <img
              alt="Web Sockets"
              title="Web Sockets"
              src={require("../../static/images/socket.jpg")}
            ></img>
            <img
              alt="Python"
              title="Python"
              src={require("../../static/images/python.png")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

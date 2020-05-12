import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-sections">
      <h2>Projects</h2>
      <div className="projects-cards">
        <div className="project-1">
          <img
            alt="Project-1"
            src={require("../../static/images/back4.jpg")}
          ></img>
          <p className="Title">MERN Chat App</p>
          <Link to={"/project/" + "1"}>
            <button className="Learn">Learn More</button>
          </Link>
        </div>
        <div className="project-2">
          <img
            alt="Project-2"
            src={require("../../static/images/back2.jpg")}
          ></img>
          <p className="Title">MERN Football App</p>
          <button className="Learn">Learn More</button>
        </div>
        <div className="project-3">
          <img
            alt="Project-3"
            src={require("../../static/images/back5.jpg")}
          ></img>
          <p className="Title">React Wedding Organizer App</p>
          <button className="Learn">Learn More</button>
        </div>
        <div className="project-4">
          <img
            alt="Project-4"
            src={require("../../static/images/back1.jpg")}
          ></img>
          <p className="Title">React Movies App</p>
          <button className="Learn">Learn More</button>
        </div>
        <div className="project-5">
          <img
            alt="Project-5"
            src={require("../../static/images/back4.jpg")}
          ></img>
          <p className="Title">Vanilla JS Floral Shop App</p>
          <button className="Learn">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Projects;

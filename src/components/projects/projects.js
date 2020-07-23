import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import data from "../../static/data/data.json";
import { Element } from "react-scroll";

const Projects = () => {
  const newData = data;
  return (
    <Element id="projects" name="projects">
      <div className="projects-sections">
        <h2>Projects</h2>
        <div className="projects-cards">
          <div className="cards">
            {newData.Projects.map((project, key) => {
              return (
                <div key={key} className="project-1">
                  <img
                    alt="Project-1"
                    src={require(`../../static/images/${project.Image}`)}
                  ></img>
                  <p className="Title">{project.Title}</p>
                  <Link to={"/project/" + project.id}>
                    <button className="Learn">Learn More</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Projects;

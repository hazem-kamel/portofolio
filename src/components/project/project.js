import React from "react";
import "./project.css";
const projectPage = (props) => {
  return (
    <div className="project">
      <div className="info">
        <h4>Movies App</h4>
        <p>React sdfsdff</p>
        <div className="tech">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Mongo</li>
            <li>Redux</li>
            <li>Redux</li>
            <li>Redux</li>
            <li>Redux</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
      <div className="image-links">
        <img src={require("../../static/images/back5.jpg")}></img>
        <div className="links">
          <i>Github Code</i>
          <i>Live Website</i>
        </div>
      </div>
    </div>
  );
};
export default projectPage;

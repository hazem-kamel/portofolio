import React, { useEffect } from "react";
import "./project.css";
import data from "../../static/data/data.json";
const ProjectPage = (props) => {
  const newData = data;
  console.log(newData);
  const ID = props.match.params;
  console.log(ID.id);
  return (
    <div className="project">
      {newData.Projects.filter((project) => project.id === ID.id).map(
        (projectInfo) => {
          return (
            <>
              <div className="info">
                <h4>{projectInfo.Title}</h4>
                <p>{projectInfo.Description}</p>
                <div className="tech">
                  <ul>
                    {projectInfo.Skills.map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="image-links">
                <img
                  alt="imageproject"
                  src={require(`../../static/images/${projectInfo.Image}`)}
                ></img>
                <div className="links">
                  <a href={projectInfo.code}>Github Code</a>
                  <a href={projectInfo.site}>Live Website</a>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};
export default ProjectPage;

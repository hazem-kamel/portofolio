import React from "react";
import Intro from "../intro/intro";
import Services from "../services/services";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
const homePage = (props) => {
  return (
    <div>
      <Intro />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};
export default homePage;

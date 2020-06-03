import React from "react";
import "./intro.css";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="first-section">
      <div className="intro-section">
        <ReactTypingEffect
          className="Hey"
          typingDelay="1000"
          text="Hey, I'm Hazem." //text=["Hello.", "World!"]
        />
        <h3>
          Web Developer from Egypt, I design and code beautifully Web
          Applications, and I love what I do.
        </h3>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="first-button">My Projects</button>
        </Link>
      </div>
      <div className="links-section">
        <a
          href="https://github.com/hazem-kamel"
          class="fab fa-github-square"
          title="Github"
        ></a>
        <a
          href="https://www.linkedin.com/in/hazem-kamel-84b311172/"
          class="fab fa-linkedin"
          title="Linkedin"
        ></a>
        <a class="fas fa-portrait" title="Download Resume" href="/Resume"></a>
      </div>
    </div>
  );
};
export default Intro;

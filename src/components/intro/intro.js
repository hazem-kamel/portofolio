import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <section className="first-section">
      <div className="intro-section">
        <h1>Hey, I'm Hazem.</h1>
        <h2>
          Web Developer from Egypt, I design and code beautifully Web
          Applications, and I love what I do.
        </h2>
        <button className="first-button">My Projects</button>
      </div>
      <div className="image-section">
        <img
          className="profile-image"
          alt="Profile"
          src={require("../../static/images/profile.png")}
        ></img>
        <div className="links-section">
          <i class="fab fa-github-square" title="Github"></i>
          <i class="fab fa-linkedin" title="Linkedin"></i>
          <i class="fas fa-portrait" title="Download Resume"></i>
        </div>
      </div>
    </section>
  );
};
export default Intro;

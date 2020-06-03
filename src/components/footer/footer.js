import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./footer.css";
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="Footer">
      <div className="slide-up">
        <i onClick={(e) => scrollToTop()} class="fas fa-angle-double-up"></i>{" "}
      </div>
      <div className="icons-links">
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
        <a href="/resume" class="fas fa-portrait" title="Download Resume"></a>
      </div>
      <div className="footer-note">
        HAZEM KAMEL
        <span>©2020</span>
      </div>
    </div>
  );
};
export default Footer;

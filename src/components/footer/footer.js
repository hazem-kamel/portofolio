import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="slide-up">
        <i class="fas fa-angle-double-up"></i>{" "}
      </div>
      <div className="icons-links">
        <i class="fab fa-github-square" title="Github"></i>
        <i class="fab fa-linkedin" title="Linkedin"></i>
        <i class="fas fa-portrait" title="Download Resume"></i>
      </div>
      <div className="footer-note">
        HAZEM KAMEL
        <span>©2020</span>
      </div>
    </div>
  );
};
export default Footer;

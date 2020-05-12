import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

const NavBar = (props) => {
  const [menuState, setMenuState] = useState(true);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {}, [menuState]);
  const menu = useRef();
  const toggle = (e) => {
    setMenuState(!menuState);
    setClicked(!clicked);
  };

  return (
    <nav>
      <a className="logo" href="/">
        <span className="circle"></span>
        <div className="square"></div>
        <span className="logo-text">HK</span>
      </a>
      <i
        id="justify"
        className="fas fa-align-justify"
        onClick={(e) => {
          toggle();
        }}
      ></i>

      <ul className="nav-links" ref={menu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

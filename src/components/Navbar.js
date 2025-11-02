// Navbar.js

import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      document.documentElement.style.scrollPaddingTop = `${navbar.offsetHeight}px`;
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Mahbubul Arefin</h1>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Mahbubul Arefin — All Rights Reserved.
      </p>
      <div className="footer-links">
        <a href="https://github.com/MahbubulArefin" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mahbubul-arefin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

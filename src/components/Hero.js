

// Hero.js

import React from "react";
import profilePic from "../assets/dp.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Mahbubul Arefin</h1>
          <p>Web Developer | Designer | Tech Enthusiast</p>
          <a href="#projects" className="hero-button">View My Work</a>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Mahbubul Arefin" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Projects.js

import React from "react";
import PortfolioImage from "../assets/portfolio.jpg";
import JobAppTrackImage from "../assets/jobAppTrack.jpg";
import EcommerceSite from "../assets/ecommerce.jpg";
import BlogApp from "../assets/blog_app.jpg";
import BookTracker from "../assets/booktracker.jpg";
import ExpenseTracker from "../assets/expensetracker.jpg";
import Weather from "../assets/weather.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work and skills.",
      link: "#",
      image: PortfolioImage,
    },
    {
      title: "E-commerce App",
      description: "A React shopping app with payment integration.",
      link: "https://github.com/MahbubulArefin/ecommerce-site",
      image: EcommerceSite,
    },
    {
      title: "Weather App",
      description: "A weather app which can show weather report of any city in the world.",
      link: "https://github.com/MahbubulArefin/weather-app",
      image: Weather,
    },
    {
      title: "Book Tracker",
      description: "A website to track read and unread books.",
      link: "https://github.com/MahbubulArefin/book-tracker",
      image: BookTracker,
    },
    {
      title: "Expense Tracker",
      description: "A website to keep track of my expenses.",
      link: "https://github.com/MahbubulArefin/expense-tracker",
      image: ExpenseTracker,
    },
    {
      title: "Job Application Tracker",
      description: "A tracking app to keep record of applied jobs.",
      link: "https://github.com/MahbubulArefin/job-application-tracker",
      image: JobAppTrackImage,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="view-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

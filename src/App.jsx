
import React from "react";
import "./App.css";
import profilePhoto from "./assets/kanchan.jpeg";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built using React.js and CSS.",
      link: "",
    },
    {
      title: "Library Management System",
      description:
        "A library management website to explore books and library features.",
      link: "https://marvel-lms.netlify.app/",
    },
    {
      title: "CRUD Application",
      description:
        "An application to add, view, edit and delete student data.",
      link: "",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>
          <h1>Kritika Sahu</h1>
          <h2>Frontend Developer</h2>

          <p>
            I am learning web development and creating
            interactive websites using React.js.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePhoto} alt="Kritika Sahu" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hi! I'm Kritika Sahu. I am interested in web development
          and enjoy learning new technologies. I work with HTML,
          CSS, JavaScript and React.js, and I am improving my
          frontend and backend development skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-button"
                >
                  Open Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>

        <p>
          If you want to connect with me, feel free to contact me.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:Kritikasahu1205@gmail.com"
            className="btn"
          >
            Email Me
          </a>

          <a href="tel:9024810680" className="btn">
            Call Me
          </a>

          <a
            href="https://github.com/kritikaSahu12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit My GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Kritika Sahu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

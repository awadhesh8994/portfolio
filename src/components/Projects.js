import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "XpensaAI – Smart Expense Tracker",
      description:
        "XpensaAI is an intelligent expense tracking web application that helps users manage and analyze their spending. Built with the MERN stack and powered by the OpenAI API, it provides smart expense categorization, insights, and summaries for better financial decisions.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "OpenAI API"],
      github: "https://github.com/awadhesh8994/XpensAI",
      liveDemo: "https://xpensaai.netlify.app/",
    },

    {
      id: 2,
      title: "Image Compressor",
      description:
        "An image compressor web app where you can compress images without losing quality. Free, fast, and easy to use.",
      techStack: ["JavaScript", "Node.js", "Express", "Sharp.js", "pdf-lib"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "https://img-compressify.vercel.app/",
    },
    {
      id: 3,
      title: "URL Shortener",
      description:
        "Developed a URL shortener app that allows users to shorten long URLs and redirect them to the original link.",
      techStack: ["HTML", "CSS", "JavaScript", "LocalStorage API"],
      github: "https://github.com/awadhesh8994/url_shortner.git",
      liveDemo: "https://url-shortner-eight-black.vercel.app/",
    },
    {
      id: 4,
      title: "CampusConnect",
      description:
        "Campus Connect is a MERN-based web platform designed for college communities. It allows students to upload and download notes, create campus events, and RSVP to events, making collaboration and communication easier within the campus.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/awadhesh8994/campusconnect.git",
      liveDemo: "https://campusconnect-cc.vercel.app/",
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div
          className={`projects-grid ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
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

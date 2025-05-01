import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    const projects = [
    {
      id: 1,
      title: "QR Code Generato",
      description: "The QR Code Generator is a JavaScript-based web app that generates QR codes for URLs, text, emails, and phone numbers It features real-time generation, offering a simple and responsive user interface.",
      techStack: ["HTML","CSS","Javascript"],
      github: "https://github.com/awadhesh8994/QR-Code-Generator.git",
      liveDemo: "https://qr-code-generator-sigma-nine.vercel.app/",
    },
    {
      id: 2,
      title: "Image Compressor",
      description: "An image compressor web app where you can compress your images without losing quality. Free, fast, and easy to use.",
      techStack: ["JavaScript", "Node.js", "Express", "Sharp.js", "pdf-lib"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "https://img-compressify.vercel.app/",
    },
    {
      id: 3,
      title: "CGPA Calculator Web App",
      description: "Simple tool to calculate Cumulative Grade Point Average with semester-wise tracking and subject management.",
      techStack: ["HTML", "CSS", "JavaScript", "LocalStorage API"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "https://cgpa-calc.example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive developer portfolio showcasing projects, skills and achievements.",
      techStack: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "https://awadhesh-io.onrender.com/",
    },
  ];



  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
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
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

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
      title: "Document Management System",
      description: "Team-based DMS with responsive UI using React and Tailwind CSS, integrated with Spring Boot backend APIs for document management.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop",
      techStack: ["React", "Tailwind", "Spring Boot", "REST APIs"],
      github: "https://github.com/Saurabh240/document-management-system.git",
      liveDemo: "https://gstechsystems.com/",
    },
    {
      id: 2,
      title: "XpensaAI",
      description: "Smart expense tracker with AI-powered categorization and insights using MERN stack and OpenAI API.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      techStack: ["MongoDB", "React", "Node.js", "OpenAI"],
      github: "https://github.com/awadhesh8994/XpensAI",
      liveDemo: "https://xpensaai.netlify.app/",
    },
    {
      id: 3,
      title: "Image Compressor",
      description: "Fast and free image compression web app without quality loss using Sharp.js library.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop",
      techStack: ["JavaScript", "Node.js", "Express", "Sharp.js"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "https://img-compressify.vercel.app/",
    },
    {
      id: 4,
      title: "CampusConnect",
      description: "MERN platform for college communities to share notes, create events, and collaborate seamlessly.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/awadhesh8994/campusconnect.git",
      liveDemo: "https://campusconnect-cc.vercel.app/",
    },
    // Add more projects here
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather application with beautiful UI and detailed forecasts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      techStack: ["React", "API", "CSS"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      techStack: ["React", "CSS", "JavaScript"],
      github: "https://github.com/awadhesh8994",
      liveDemo: "#",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-badge">
            <span className="badge-icon">💼</span>
            <span>My Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="title-highlight">Projects</span>
          </h2>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`projects-grid ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          {displayedProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {projects.length > 4 && (
          <div className="load-more-container">
            <button 
              className="load-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              <span>{showAll ? "Show Less" : "View More Projects"}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
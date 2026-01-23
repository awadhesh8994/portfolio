import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-icon">👨‍💻</span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Know More <span className="title-highlight">About Me</span>
          </h2>
        </div>

        {/* About Content */}
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          {/* About Text */}
          <div className="about-text">
            <p>
              I'm a passionate Computer Science Engineer with a deep love for building 
              innovative web applications. My journey in web development started with 
              curiosity and has evolved into a dedicated pursuit of creating exceptional 
              digital experiences.
            </p>
            <p>
              I specialize in full-stack development, working with modern technologies 
              to build scalable, performant, and user-friendly applications. From crafting 
              intuitive user interfaces to architecting robust backend systems, I enjoy 
              every aspect of bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying updated with the latest trends 
              in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
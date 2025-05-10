import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content" ref={sectionRef}>
          <div className="about-text">
            <p>
            Hello, I'm Awadhesh Kumar, a passionate Computer Science Engineer, Web Developer, and Tech Explorer.
            I specialize in building full-stack applications with a deep focus on user-centric design. Currently, 
            I am working on diverse projects, including a second-hand book marketplace, while expanding my knowledge of technologies like React, Node.js and Express.js.
            I am committed to continuous learning and am eager to contribute to meaningful, impactful projects in the tech industry.
              </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">Currently building a second-hand book marketplace.</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🧠</span>
                <span className="highlight-text">Learning React,Mongodb,Node.js and Express.js .</span>
              </div>
              {/* <div className="highlight-item">
                <span className="highlight-icon">⚖️</span>
                <span className="highlight-text">Future Tech + Law enthusiast.</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

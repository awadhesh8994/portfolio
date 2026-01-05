import React, { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
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
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content" ref={sectionRef}>
          <div className="about-text">
            <p>
              Hi, I'm Awadhesh Kumar – a full-stack developer exploring the
              future of web applications. Currently, I’m building a cutting-edge
              blogging platform while mastering React, Node.js, Express.js, and
              MongoDB. I thrive on learning new technologies and creating
              innovative projects that push boundaries. I’m passionate about
              turning ideas into real-world solutions and making a meaningful
              impact through technology.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">
                  Currently working on a full-stack blogging web application.
                </span>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🧠</span>
                <span className="highlight-text">
                  Enhancing skills in modern web development with React,
                  Node.js, Express.js, and MongoDB.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

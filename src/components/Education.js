// src/components/Education.js
import React, { useEffect, useRef, useState } from 'react';
import '../styles/Education.css';

const Education = () => {
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

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Goel Institute of Technology & Management",
      location: "Lucknow",
      period: "2020 - 2026",
    }
  ];

//   const certifications = [
//     {
//       id: 1,
//       title: "React - The Complete Guide",
//       issuer: "Udemy",
//       date: "June 2023",
//     },
//     {
//       id: 2,
//       title: "Data Structures & Algorithms",
//       issuer: "Coding Ninjas",
//       date: "December 2022",
//     },
//     {
//       id: 3,
//       title: "Full Stack Web Development",
//       issuer: "FreeCodeCamp",
//       date: "March 2023",
//     },
//   ];

  const achievements = [
    "Completed 200+ DSA problems on LeetCode",
    "Participated in Coding Ninjas Hackathon 2023",
    "Developed online learning platform for college students"
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className={`education-content ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div className="timeline-item" key={item.id} style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}, {item.location}</h4>
                  <p className="timeline-period">{item.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div 
                  className="certification-card" 
                  key={cert.id}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} <span className="cert-date">• {cert.date}</span></p>
                </div>
              ))}
            </div>
          </div> */}

          {/* <div className="achievements-section">
            <h3>Achievements</h3>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li 
                  key={index} 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
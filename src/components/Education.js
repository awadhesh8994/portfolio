import React, { useEffect, useRef } from "react";
import "../styles/Education.css";

const Education = () => {
  // Refs for different animated groups
  const sectionRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const achievementItemsRef = useRef([]);

  // Add ref to array for timeline items
  const addToTimelineRefs = (el) => {
    if (el && !timelineItemsRef.current.includes(el)) {
      timelineItemsRef.current.push(el);
    }
  };

  // Add ref to array for achievements
  const addToAchievementRefs = (el) => {
    if (el && !achievementItemsRef.current.includes(el)) {
      achievementItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observers = [];

    // Observer for the main section (to trigger initial load)
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
      observers.push(sectionObserver);
    }

    // Observer for timeline items
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) itemObserver.observe(item);
      observers.push(itemObserver);
    });

    // Observer for achievement items
    achievementItemsRef.current.forEach((item) => {
      if (item) itemObserver.observe(item);
      observers.push(itemObserver);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Goel Institute of Technology & Management",
      location: "Lucknow, India",
      period: "2020 – 2026 (Expected)",
    },
    // Add more degrees here in reverse chronological order
  ];

  const achievements = [
    "Solved 200+ Data Structures & Algorithms problems on LeetCode",
    "Participated in Coding Ninjas National Hackathon 2023",
    "Developed a full-stack online learning platform for college students",
    // Add more as needed
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic journey and key milestones</p>
        </div>

        <div className="education-content" ref={sectionRef}>
          {/* Timeline */}
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div
                className="timeline-item"
                key={item.id}
                ref={addToTimelineRefs}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <h4>
                    {item.institution} <span className="location">• {item.location}</span>
                  </h4>
                  <p className="timeline-period">{item.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h3>Achievements & Highlights</h3>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  ref={addToAchievementRefs}
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Optional: Certifications Section (uncomment when you have data) */}
          {/*
          <div className="certifications-section">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              <div className="certification-card" ref={addToCertRefs}>
                <h4>React.js Professional Certificate</h4>
                <p>Coursera • Meta</p>
                <span className="cert-date">Issued Dec 2024</span>
              </div>
              // Add more cards
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Education;
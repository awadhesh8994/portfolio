import React, { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";

const Skills = () => {
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

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React.js", level: 70 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      name: "Database",
      skills: [{ name: "MongoDB", level: 60 }],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 75 },
        { name: "Vercel", level: 65 },
        { name: "Postman", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div
          className={`skills-content ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          {skillCategories.map((category, index) => (
            <div
              className="skill-category"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3>{category.name}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          animationDelay: `${
                            skillIndex * 0.1 + 0.3
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

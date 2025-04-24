// src/components/UI/Section.js
import React, { useRef, useEffect, useState } from 'react';

const Section = ({ id, className, title, children }) => {
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

  return (
    <section id={id} className={className} ref={sectionRef}>
      <div className="container">
        {title && (
          <div className="section-title">
            <h2>{title}</h2>
          </div>
        )}
        <div className={`section-content ${isVisible ? 'visible' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Full Stack Development",
      description: "Building complete web applications from frontend to backend using modern technologies like React, Node.js, MongoDB, and cloud services.",
      features: ["Frontend & Backend", "Database Design", "API Development"]
    },
    {
      id: 5,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and better user experience with cutting-edge techniques.",
      features: ["Code Splitting", "Lazy Loading", "SEO Optimization"]
    },
    {
      id: 6,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2"/>
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Providing ongoing maintenance, bug fixes, and feature updates to keep your applications running smoothly.",
      features: ["Bug Fixes", "Updates", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-badge">
            <span className="badge-icon">⚡</span>
            <span>What I Offer</span>
          </div>
          <h2 className="section-title">
            My <span className="title-highlight">Services</span>
          </h2>
          <p className="section-description">
            I provide comprehensive web development services to help you build 
            amazing digital products that your users will love.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
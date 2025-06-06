import React, { useState, useEffect } from 'react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    {
      number: '95%',
      label: 'Project Success Rate',
      icon: '🎯',
      description: isMobile ? 'Successful projects' : 'Projects completed on time and within budget'
    },
    {
      number: '5M m²',
      label: 'Area Developed',
      icon: '🏗️',
      description: isMobile ? 'Total area' : 'Total construction area completed'
    },
    {
      number: '4.9/5',
      label: 'Client Satisfaction',
      icon: '⭐',
      description: isMobile ? 'Average rating' : 'Average rating from our clients'
    }
  ];

  return (
    <section className={`stats-section ${isMobile ? 'mobile' : ''}`}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'animate' : ''}`}
              style={{ 
                transitionDelay: `${index * (isMobile ? 0.2 : 0.3)}s`
              }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
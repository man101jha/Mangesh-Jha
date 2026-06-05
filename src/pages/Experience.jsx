import React from 'react';
import './Experience.css';
import { usePortfolio } from '../services/portfolioService';

export default function Experience() {
  const { experiences } = usePortfolio();

  return (
    <div className="page-content experience">
      <h1 className="page-title">Changelog from my journey</h1>
      <p className="page-subtitle">
        I've been shipping products and learning in public. Here's a timeline of my journey.
      </p>

      <div className="timeline">
        {experiences && experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Left: date + dot */}
            <div className="timeline-left">
              <div className="timeline-dot" />
              <span className="timeline-period">{exp.period}</span>
            </div>

            {/* Right: content */}
            <div className="timeline-content">
              <div className="timeline-header">
                <h2 className="timeline-role">{exp.role}</h2>
                <span className="timeline-separator">·</span>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-company"
                >
                  {exp.company}
                </a>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <ul className="timeline-bullets">
                {exp.bullets && exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="timeline-tags">
                {exp.tags && exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

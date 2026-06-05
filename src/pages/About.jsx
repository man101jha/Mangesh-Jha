import React from 'react';
import './About.css';
import { usePortfolio } from '../services/portfolioService';

export default function About() {
  const { about } = usePortfolio();

  const whoIAm = about?.whoIAm || [];
  const skills = about?.skills || [];
  const beliefs = about?.beliefs || [];

  return (
    <div className="page-content about">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">
        I build high-performance web & mobile applications with a focus on AI integration.
      </p>

      {whoIAm.length > 0 && (
        <section className="about-section">
          <h2 className="about-section-title">Who I Am</h2>
          <div className="about-text">
            {whoIAm.map((para, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className="about-section">
          <h2 className="about-section-title">Tech I Work With</h2>
          <div className="skills-grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-group">
                <div className="skill-category">{category}</div>
                <div className="skill-tags">
                  {items.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {beliefs.length > 0 && (
        <section className="about-section">
          <h2 className="about-section-title">What I Believe</h2>
          <div className="about-text">
            {beliefs.map((belief, index) => (
              <p key={index}>
                <strong>{belief.title}:</strong> {belief.desc}
              </p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}


import React from 'react';
import './About.css';

const skills = [
  { category: 'Frontend', items: ['Angular (v17)', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'Angular Material'] },
  { category: 'AI Learning', items: ['LLMs', 'LangChain.js', 'Google Gemini', 'OpenAI API', 'Prompt Engineering'] },
  { category: 'Tools & Security', items: ['Git', 'Keycloak', 'Azure AD', 'VS Code', 'Bugzilla'] },
  { category: 'Testing & Core', items: ['Jasmine', 'Karma', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
];

export default function About() {
  return (
    <div className="page-content about">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">
        A little more about who I am, what I do, and what drives me.
      </p>

      <section className="about-section">
        <h2 className="about-section-title">Who I Am</h2>
        <div className="about-text">
          <p>
            I'm a full-stack AI engineer who loves turning ambitious ideas into
            real products — fast. I've been building on the web for 5+ years and
            have shipped everything from solo side-projects to VC-backed startups.
          </p>
          <p>
            My sweet spot is the intersection of AI and great UX. I care deeply
            about how things feel to use, not just how they work under the hood.
          </p>
          <p>
            When I'm not at the keyboard, I'm reading about new AI research,
            hiking, or experimenting in the kitchen.
          </p>
        </div>
      </section>

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

      <section className="about-section">
        <h2 className="about-section-title">What I Believe</h2>
        <div className="about-text">
          <p>
            Speed matters. I'd rather ship a focused MVP in 2 weeks and learn
            from real users than spend months polishing something no one wants.
          </p>
          <p>
            Great software is invisible. When something is truly well-designed,
            users don't notice the interface — they just accomplish their goal.
          </p>
        </div>
      </section>
    </div>
  );
}

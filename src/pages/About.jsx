import React from 'react';
import './About.css';

const skills = [
  { category: 'Frontend', items: ['Next.js', 'React', 'Angular (v17)', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Android & iOS Development'] },
  { category: 'Backend', items: ['FastAPI', 'Python', 'Node.js'] },
  { category: 'AI', items: ['CrewAI', 'Ollama', 'Groq API', 'LLMs', 'Google Gemini', 'Prompt Engineering'] },
  { category: 'Tools', items: ['Git', 'Keycloak', 'Vercel', 'Firebase', 'VS Code', 'Azure AD'] },
];

export default function About() {
  return (
    <div className="page-content about">
      <h1 className="page-title">About Me</h1>
      <p className="page-subtitle">
        I build high-performance web & mobile applications with a focus on AI integration.
      </p>

      <section className="about-section">
        <h2 className="about-section-title">Who I Am</h2>
        <div className="about-text">
          <p>
            I'm a <strong>Frontend & Flutter Developer</strong> at <strong>Yotta Infrastructures</strong>, 
            where I've been building scalable enterprise platforms since 2023. My expertise lies in 
            bridging the gap between complex backend systems and intuitive, modern user interfaces.
          </p>
          <p>
            My recent focus has been on <strong>AI-powered products</strong>. I've developed platforms like 
            <em> JobPilot AI</em> and <em>ExamGenie AI</em>, which leverage multi-agent orchestration 
            and large language models to solve real-world problems.
          </p>
          <p>
            I believe in the power of "shipping fast and iterating." Whether it's a web portal for 
            thousands of enterprise users or a mobile app for on-the-go management, I strive for 
            performance, security, and a premium user experience.
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
            <strong>User-First Design:</strong> Great software is invisible. Users shouldn't notice the 
            interface; they should just accomplish their goals effortlessly.
          </p>
          <p>
            <strong>Scalability & Security:</strong> Working in the infrastructure space has taught me 
            the importance of building systems that are robust, secure, and ready to grow.
          </p>
          <p>
            <strong>Continuous Learning:</strong> The tech landscape—especially AI—is moving fast. 
            I'm committed to staying at the forefront of these changes to build better products.
          </p>
        </div>
      </section>
    </div>
  );
}


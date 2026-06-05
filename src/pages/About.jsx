import React from 'react';
import './About.css';

const skills = [
  { category: 'AI / LLM', items: ['LangChain', 'CrewAI', 'Groq API', 'Google Gemini', 'OpenAI API', 'Ollama', 'RAG', 'FAISS', 'Pinecone', 'Multi-Agent Orchestration'] },
  { category: 'Backend', items: ['FastAPI', 'Python', 'Node.js'] },
  { category: 'Frontend', items: ['Angular 17', 'Next.js', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'] },
  { category: 'Mobile', items: ['Flutter', 'Dart'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Keycloak', 'Azure AD', 'OAuth 2.0'] },
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
            I'm an <strong>AI Engineer and Full-Stack Developer</strong> at <strong>Yotta Infrastructures</strong>, building production AI applications alongside enterprise-scale platforms.
          </p>
          <p>
            My AI work spans agentic RAG systems, multi-agent orchestration with CrewAI, and LLM-powered products using Groq, Google Gemini, and OpenAI APIs. <a href="https://nyaya-pro-assistant.vercel.app/" target="_blank" rel="noopener noreferrer">Nyaya-Pro</a> — my flagship project — is a legal RAG assistant grounded in Indian legal corpora with cross-encoder re-ranking and cited responses. <a href="https://jobpilot-ai-rho.vercel.app/" target="_blank" rel="noopener noreferrer">JobPilot AI</a> and <a href="https://examgenie-ai.vercel.app/upload" target="_blank" rel="noopener noreferrer">ExamGenie AI</a> are deployed and actively used.
          </p>
          <p>
            My frontend depth (Angular, Flutter, Next.js) means I don't just build models — I ship complete AI products end to end.
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
            <strong>Build in public, ship fast:</strong> The best way to learn AI engineering is to deploy it. Every project I build solves a real problem and goes live.
          </p>
        </div>
      </section>
    </div>
  );
}


import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="page-content home">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero">
        <h1 className="hero-heading">
          <span className="hero-heading-box">Hey, I'm Mangesh Jha</span>
        </h1>

        <p className="hero-role">
          AI Engineer · Full-Stack · LLM Applications
          <span className="role-arrow">▶</span>
        </p>

        {/* LinkedIn Connection Card */}
        <div className="x-card">
          <span className="x-logo">in</span>
          <div className="x-card-text">
            <span className="x-card-primary">Connect with me on LinkedIn</span>
            <span className="x-card-secondary">Professional network & updates</span>
          </div>
          <a
            href="https://www.linkedin.com/in/mangesh-jha"
            target="_blank"
            rel="noopener noreferrer"
            className="x-follow-btn"
          >
            Connect
          </a>
        </div>
      </section>

      {/* ── Bio ──────────────────────────────────── */}
      <section className="bio">
        <p className="bio-main">
          I build and ship AI-powered products — from agentic RAG pipelines to multi-agent orchestration systems. At{' '}
          <a
            href="https://yotta.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link"
          >
            Yotta Infrastructures
          </a>
          , I've delivered enterprise-scale platforms used by thousands. My AI work:{' '}
          <a
            href="https://nyaya-pro-assistant.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link"
          >
            Nyaya-Pro
          </a>{' '}
          (legal RAG assistant with semantic re-ranking and zero-hallucination design),{' '}
          <a
            href="https://jobpilot-ai-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link"
          >
            JobPilot AI
          </a>{' '}
          (CrewAI multi-agent pipeline), and{' '}
          <a
            href="https://examgenie-ai.vercel.app/upload"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link"
          >
            ExamGenie AI
          </a>{' '}
          — all deployed and live.
        </p>

        <p className="bio-sub">
          This is where I document shipped AI products, engineering decisions, and what I'm building next.
        </p>
      </section>

      {/* ── Contact + Email buttons ──────────────── */}
      <div className="cta-row">
        <a href="/contact" className="cta-btn cta-btn--primary">Contact</a>
        <a href="mailto:mangesh105jha@gmail.com" className="cta-btn cta-btn--outline">✉ E-Mail</a>
        <a 
          href="https://drive.google.com/file/d/1ZmcuSrLxSECxkuEhjipMEn4Eu4eFZKa1/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn cta-btn--outline"
        >
          ↓ Resume
        </a>
      </div>



      {/* ── Reach Out ────────────────────────────── */}
      <div className="reach-out">
        <a href="/contact" className="reach-out-link">Reach out →</a>
      </div>
    </div>
  );
}

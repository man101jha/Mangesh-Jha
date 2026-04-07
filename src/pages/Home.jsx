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
          Frontend Developer · AI Learner
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
          I build high-performance web applications and I'm currently 
          obsessed with <em>integrating AI</em> into the frontend.
        </p>

        <p className="bio-sub">
          This is my personal website where I document my work as a Frontend 
          Engineer and my progress in building intelligent web products.
        </p>

        <p className="bio-body">
          Currently working as a <strong>Frontend Developer</strong> at{' '}
          <a
            href="https://yotta.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link"
          >
            Yotta Infrastructures
          </a>
          . I have been building scalable enterprise platforms since 2023, 
          including major projects like{' '}
          <a href="https://examgenie-ai.vercel.app/upload" target="_blank" rel="noopener noreferrer" className="bio-link">
            ExamGenie AI
          </a>,{' '}
          <a href="/projects" className="bio-link">
            OneYotta
          </a>{' '}
          and{' '}
          <a href="/projects" className="bio-link">
            MyPortal
          </a>.
        </p>

        <p className="bio-body">
          You can talk to me about <strong>AI, new ideas, life, or anything else.</strong>
          <br />
          Say Hi on{' '}
          <a
            href="https://www.linkedin.com/in/mangesh-jha"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-link bio-link--bold"
          >
            LinkedIn
          </a>
        </p>
      </section>

      {/* ── Contact + Email buttons ──────────────── */}
      <div className="cta-row">
        <a href="/contact" className="cta-btn cta-btn--primary">Contact</a>
        <a href="mailto:you@example.com" className="cta-btn cta-btn--outline">✉ E-Mail</a>
      </div>

      {/* ── Latest Blog Card ─────────────────────── */}
      <section className="featured-blog">
        <p className="featured-label">Check this out</p>
        <a href="/blogs" className="featured-blog-card">
          <div>
            <div className="featured-blog-title">
              Building AI Products That Actually Ship
            </div>
            <div className="featured-blog-desc">
              Practical notes on going from idea to production — how I approach
              scope, speed, and quality without burning out.
            </div>
          </div>
          <span className="featured-blog-cta">Read more →</span>
        </a>
      </section>

      {/* ── Reach Out ────────────────────────────── */}
      <div className="reach-out">
        <a href="/contact" className="reach-out-link">Reach out →</a>
      </div>
    </div>
  );
}

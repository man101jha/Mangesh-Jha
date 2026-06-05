import React from 'react';
import './Home.css';
import { usePortfolio } from '../services/portfolioService';

export default function Home() {
  const { profile, home } = usePortfolio();

  const name = profile?.name || 'Mangesh Jha';
  const heroSubtitle = home?.heroSubtitle || 'AI Engineer · Full-Stack · LLM Applications';
  const linkedinUrl = profile?.linkedin || 'https://www.linkedin.com/in/mangesh-jha';
  const emailUrl = profile?.email ? `mailto:${profile.email}` : 'mailto:mangesh105jha@gmail.com';
  const resumeUrl = profile?.resumeUrl || 'https://drive.google.com/file/d/1ZmcuSrLxSECxkuEhjipMEn4Eu4eFZKa1/view?usp=sharing';

  const bioMain = home?.bioMain || "I build and ship AI-powered products...";
  const bioSub = home?.bioSub || "This is where I document shipped AI products...";

  return (
    <div className="page-content home">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero">
        <h1 className="hero-heading">
          <span className="hero-heading-box">Hey, I'm {name}</span>
        </h1>

        <p className="hero-role">
          {heroSubtitle}
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
            href={linkedinUrl}
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
        <p className="bio-main" dangerouslySetInnerHTML={{ __html: bioMain }} />
        <p className="bio-sub" dangerouslySetInnerHTML={{ __html: bioSub }} />
      </section>

      {/* ── Contact + Email buttons ──────────────── */}
      <div className="cta-row">
        <a href="/contact" className="cta-btn cta-btn--primary">Contact</a>
        <a href={emailUrl} className="cta-btn cta-btn--outline">✉ E-Mail</a>
        <a 
          href={resumeUrl} 
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

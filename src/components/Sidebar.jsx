import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { usePortfolio } from '../services/portfolioService';
import './Sidebar.css';

const navLinks = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/experience', label: 'Experience', icon: '◈' },
  { to: '/projects', label: 'Projects', icon: '◎' },
  { to: '/projects?tab=Certifications', label: 'Certifications', icon: '🎓' },
  { to: '/blogs', label: 'Blog', icon: '✦' },
  { to: '/about', label: 'About', icon: '◯' },
  { to: '/contact', label: 'Contact', icon: '✉' },
  { to: '/tools', label: 'Tools', icon: '⚙' },
];

export default function Sidebar() {
  const { profile } = usePortfolio();
  const location = useLocation();
  const [wordIndex, setWordIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const typewriterWords = profile?.typewriterWords || ['Frontend Developer', 'AI Engineer', 'AI Learner', 'Problem Solver'];
  const name = profile?.name || 'Mangesh Jha';
  const resumeUrl = profile?.resumeUrl || 'https://drive.google.com/file/d/1ZmcuSrLxSECxkuEhjipMEn4Eu4eFZKa1/view?usp=sharing';

  const socialLinks = [
    { href: profile?.linkedin || 'https://www.linkedin.com/in/mangesh-jha', label: 'LinkedIn', icon: 'in' },
    { href: profile?.github || 'https://github.com/man101jha', label: 'Github', icon: '©' },
  ];

  // Simple typewriter rotation (1 word per 2.5s)
  React.useEffect(() => {
    const t = setInterval(() => {
      setWordIndex(i => (i + 1) % typewriterWords.length);
    }, 2500);
    return () => clearInterval(t);
  }, [typewriterWords.length]);

  return (
    <>
      {/* ── Mobile Header ──────────────────────────────── */}
      <header className="mobile-header">
        <div className="mobile-header-brand">
          <div className="avatar-sm">MJ</div>
          <div>
            <div className="brand-name">{name}</div>
            <div className="brand-tagline">{typewriterWords[wordIndex]}</div>
          </div>
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="open menu">
          <span /><span /><span />
        </button>
      </header>

      {/* ── Mobile Overlay ─────────────────────────────── */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* ── Sidebar ────────────────────────────────────── */}
      <aside className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}>
        {/* Profile */}
        <div className="sidebar-profile">
          <div className="avatar">MJ</div>
          <div>
            <div className="sidebar-name">{name}</div>
            <div className="sidebar-tagline">
              {typewriterWords[wordIndex]}
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {navLinks.map(({ to, label, icon }) => {
            const isCert = to.includes('tab=Certifications');
            const isProjects = to === '/projects';
            
            let isActive = false;
            if (isCert) {
              isActive = location.pathname === '/projects' && location.search.includes('tab=Certifications');
            } else if (isProjects) {
              isActive = location.pathname === '/projects' && !location.search.includes('tab=Certifications');
            } else {
              isActive = location.pathname === to || (to === '/' && location.pathname === '/');
            }

            return (
              <NavLink
                key={to}
                to={to}
                className={`sidebar-nav-link ${isActive ? 'sidebar-nav-link--active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <span className="nav-icon">{icon}</span>
                {label}
              </NavLink>
            );
          })}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-nav-link"
            style={{ marginTop: '4px' }}
          >
            <span className="nav-icon">↓</span>
            Resume
          </a>
        </nav>

        {/* Social */}
        <div className="sidebar-social">
          <div className="sidebar-social-title">Connect</div>
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-social-link"
            >
              <span className="social-icon">{icon}</span>
              {label}
              <span className="external-icon">↗</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

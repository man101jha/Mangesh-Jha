import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navLinks = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/experience', label: 'Experience', icon: '◈' },
  { to: '/projects', label: 'Projects', icon: '◎' },
  { to: '/about', label: 'About', icon: '◯' },
  { to: '/contact', label: 'Contact', icon: '✉' },
  { to: '/tools', label: 'Tools', icon: '⚙' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/mangesh-jha', label: 'LinkedIn', icon: 'in' },
  { href: 'https://github.com/mangesh105jha', label: 'Github', icon: '©' },
];

const typewriterWords = ['Frontend Developer', 'Flutter Developer', 'AI Learner', 'Problem Solver'];

export default function Sidebar() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Simple typewriter rotation (1 word per 2.5s)
  React.useEffect(() => {
    const t = setInterval(() => {
      setWordIndex(i => (i + 1) % typewriterWords.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Mobile Header ──────────────────────────────── */}
      <header className="mobile-header">
        <div className="mobile-header-brand">
          <div className="avatar-sm">MJ</div>
          <div>
            <div className="brand-name">Mangesh Jha</div>
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
            <div className="sidebar-name">Mangesh Jha</div>
            <div className="sidebar-tagline">
              {typewriterWords[wordIndex]}
              <span className="cursor">|</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `sidebar-nav-link ${isActive ? 'sidebar-nav-link--active' : ''}`
              }
              onClick={() => setMobileOpen(false)}
            >
              <span className="nav-icon">{icon}</span>
              {label}
            </NavLink>
          ))}
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

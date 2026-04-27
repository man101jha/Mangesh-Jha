import React, { useState } from 'react';
import './Projects.css';

// Project Images
import examgenieImg from '../assets/examgenie.png';
import oneyottaImg from '../assets/oneyottadashboard.png';
import myportalImg from '../assets/myportalDashboard.png';
import spilloImg from '../assets/spillo-exim.png';
import jobpilotImg from '../assets/jobpilot.png';
import oneyottaAppImg from '../assets/oneyottaapp.png';

const allProjects = [
  {
    id: 5,
    title: 'JobPilot AI',
    subtitle: 'AI Job Application Assistant',
    description:
      'An AI-powered job application assistant orchestrated with CrewAI. Built using local Ollama models for development and Groq API for high-speed production inference.',
    image: jobpilotImg,
    status: 'active',
    visitUrl: 'https://jobpilot-ai-rho.vercel.app/',
    githubUrl: 'https://github.com/man101jha/jobpilot-AI',
    tags: ['Next.js', 'FastAPI', 'CrewAI', 'Ollama', 'Groq API'],
    category: 'AI & Personal',
  },
  {
    id: 1,
    title: 'ExamGenie AI',
    subtitle: 'AI Exam Generator',
    description:
      'A powerful platform that transforms study PDFs into interactive, smart exams with instant feedback and explanations. Built with Angular and powered by Google Gemini.',
    image: examgenieImg,
    status: 'active',
    visitUrl: 'https://examgenie-ai.vercel.app/upload',
    githubUrl: 'https://github.com/man101jha/examgenie-ai',
    tags: ['Angular', 'AI/LLM', 'Google Gemini', 'TypeScript'],
    category: 'AI & Personal',
  },
  {
    id: 2,
    title: 'OneYotta Portal',
    subtitle: 'Customer-facing platform | Yotta Infrastructures',
    description:
      'A scalable customer portal for managing data center resources, invoices, and real-time monitoring. Built with Angular 17 and integrated with Keycloak for security.',
    image: oneyottaImg,
    status: 'active',
    visitUrl: 'https://account.yotta.com/',
    githubUrl: null,
    tags: ['Angular', 'TypeScript', 'NgRx', 'Keycloak'],
    category: 'Work',
  },
  {
    id: 6,
    title: 'OneYotta App',
    subtitle: 'Mobile Application | Yotta Infrastructures',
    description:
      'A comprehensive Flutter application for OneYotta portal, providing data center management and monitoring on the go for Android and iOS.',
    image: oneyottaAppImg,
    status: 'active',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.oneyotta&referrer=utm_source%3Dappbrain%26utm_medium%3Dappbrain_web%26utm_campaign%3Dappbrain_web',
    visitLabel: 'Play Store',
    githubUrl: 'https://apps.apple.com/in/app/oneyotta/id6758011343',
    githubLabel: 'App Store',
    tags: ['Flutter', 'Dart', 'Mobile Development', 'Android', 'iOS'],
    category: 'Work',
  },
  {
    id: 3,
    title: 'MyPortal',
    subtitle: 'Internal Operations | Yotta Infrastructures',
    description:
      'An internal dashboard for monitoring server utilization, networking, and storage backup operations. Features real-time data visualization and CCTV integration.',
    image: myportalImg,
    status: 'active',
    visitUrl: 'https://myportal.yotta.com/',
    githubUrl: null,
    tags: ['Angular', 'RxJS', 'D3.js', 'Bootstrap'],
    category: 'Work',
  },
  {
    id: 4,
    title: 'Spillo Exim',
    subtitle: 'Client Project | Spices Export',
    description:
      'A high-performance business website developed for a spices export client, focusing on global marketing and interactive product displays.',
    image: spilloImg,
    status: 'shipped',
    visitUrl: 'https://man101jha.github.io/spillo-exim/',
    githubUrl: 'https://github.com/man101jha/spillo-exim',
    tags: ['HTML', 'CSS', 'JavaScript', 'Client Project'],
    category: 'Client',
  },
];

const statusColors = {
  active: { bg: '#d1fae5', text: '#065f46' },
  shipped: { bg: '#e0e7ff', text: '#3730a3' },
  archived: { bg: '#f3f4f6', text: '#6b7280' },
};

function ProjectCard({ project }) {
  const status = statusColors[project.status] || statusColors.active;

  return (
    <div className="project-card">
      {/* Image / placeholder */}
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-img-src" />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-header">
          <div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <button className="project-star" aria-label="star">☆</button>
        </div>

        <p className="project-desc">{project.description}</p>

        {/* Actions */}
        <div className="project-actions">
          {project.visitUrl && (
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--primary"
            >
              {project.visitLabel || 'Visit'}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--outline"
            >
              {project.githubLabel || 'GitHub'}
            </a>
          )}

          <span
            className="project-status"
            style={{ backgroundColor: status.bg, color: status.text }}
          >
            {project.status}
          </span>
        </div>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'AI & Personal', 'Work', 'Client'];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="page-content projects">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">Playground — Small MVPs to Production Apps</p>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

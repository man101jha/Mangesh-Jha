import React from 'react';
import './Experience.css';

const experiences = [
  {
    period: 'April 2025 – Present',
    role: 'Senior Software Developer',
    company: 'Yotta Infrastructures Pvt Ltd',
    companyUrl: 'https://yotta.com',
    description: 'Leading frontend architecture and building intelligent, high-performance web solutions for large-scale enterprise monitoring.',
    bullets: [
      'Leading the frontend architecture for next-gen data center operations platforms.',
      'Mentoring junior developers and conducting deep code reviews for quality and scalability.',
      'Exploring and integrating AI-powered insights into real-time monitoring workflows.',
      'Optimizing complex CCTV live-playback streams for reduced latency and better UX.',
    ],
    tags: ['Angular 17', 'AI Integration', 'Frontend Architecture', 'Leadership'],
  },
  {
    period: 'April 2024 – March 2025',
    role: 'Executive',
    company: 'Yotta Infrastructures Pvt Ltd',
    companyUrl: 'https://yotta.com',
    description: 'Focused on owning core modules and improving platform security and performance.',
    bullets: [
      'Successfully led the migration of major Angular applications from v14 to v17.',
      'Integrated enterprise-grade authentication using Keycloak and Azure AD for secure access control.',
      'Developed and optimized invoicing and reporting systems for OneYotta.',
      'Improved dashboard performance by 30% through NgRx state management optimizations.',
    ],
    tags: ['NgRx', 'RxJS', 'Keycloak', 'Performance Optimization'],
  },
  {
    period: 'May 2023 – March 2024',
    role: 'Graduate Trainee',
    company: 'Yotta Infrastructures Pvt Ltd',
    companyUrl: 'https://yotta.com',
    description: 'Assisting in the development of monitoring tools and learning enterprise-scale development practices.',
    bullets: [
      'Contributed to the initial development of MyPortal operations monitoring tools.',
      'Built reusable shared components using Angular Material for consistent UI across products.',
      'Assisted in data visualization tasks using D3.js and Chart.js for server utilization metrics.',
      'Collaborated closely with backend teams to integrate RESTful APIs efficiently.',
    ],
    tags: ['Angular', 'TypeScript', 'Angular Material', 'D3.js'],
  },
];

export default function Experience() {
  return (
    <div className="page-content experience">
      <h1 className="page-title">Changelog from my journey</h1>
      <p className="page-subtitle">
        I've been shipping products and learning in public. Here's a timeline of my journey.
      </p>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Left: date + dot */}
            <div className="timeline-left">
              <div className="timeline-dot" />
              <span className="timeline-period">{exp.period}</span>
            </div>

            {/* Right: content */}
            <div className="timeline-content">
              <div className="timeline-header">
                <h2 className="timeline-role">{exp.role}</h2>
                <span className="timeline-separator">·</span>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-company"
                >
                  {exp.company}
                </a>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <ul className="timeline-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="timeline-tags">
                {exp.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

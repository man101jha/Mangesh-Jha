import React from 'react';
import './Projects.css';
import { usePortfolio } from '../services/portfolioService';
import { useSearchParams } from 'react-router-dom';

const statusColors = {
  active: { bg: '#d1fae5', text: '#065f46' },
  shipped: { bg: '#e0e7ff', text: '#3730a3' },
  archived: { bg: '#f3f4f6', text: '#6b7280' },
};

function ProjectCard({ project, getProjectImage }) {
  const status = statusColors[project.status] || statusColors.active;
  const imageSrc = getProjectImage(project.image);

  return (
    <div className="project-card">
      {/* Image / placeholder */}
      <div className="project-image">
        {imageSrc ? (
          <img src={imageSrc} alt={project.title} className="project-img-src" />
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
          {project.tags && project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ cert }) {
  return (
    <div className="project-card certification-card">
      {/* Image / placeholder */}
      <div className="project-image">
        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="project-img-src" />
        ) : (
          <div className="project-image-placeholder">
            <span>🎓</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-header">
          <div>
            <h2 className="project-title">{cert.title}</h2>
            <p className="project-subtitle">{cert.issuer} · {cert.issueDate}</p>
          </div>
        </div>

        {cert.credentialId && (
          <p className="project-desc" style={{ marginTop: '8px', fontSize: '13px' }}>
            Credential ID: <code style={{ background: 'var(--bg-sidebar)', padding: '2px 6px', borderRadius: '4px' }}>{cert.credentialId}</code>
          </p>
        )}

        {/* Actions */}
        <div className="project-actions" style={{ marginTop: '16px' }}>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--primary"
            >
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects, certifications, getProjectImage } = usePortfolio();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategory = searchParams.get('tab') || 'All';
  
  const setActiveCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ tab: cat });
    }
  };
  
  const categories = ['All', 'AI & Personal', 'Work', 'Client', 'Certifications'];

  // Filter projects/certifications based on active category tab
  const showCertifications = activeCategory === 'Certifications';
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
        {showCertifications ? (
          certifications.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))
        ) : (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} getProjectImage={getProjectImage} />
          ))
        )}
      </div>
    </div>
  );
}

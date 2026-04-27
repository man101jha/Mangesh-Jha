import React from 'react';
import './Tools.css';

import keycloakImg from '../assets/keycloak.png';
import antigravityImg from '../assets/antigravity.png';
import flutterImg from '../assets/flutter.png';
import fastapiImg from '../assets/FastAPI.png';

const tools = [
  { name: 'VS Code', desc: 'Code Editor', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
  { name: 'Keycloak', desc: 'Auth Service', icon: keycloakImg },
  { name: 'Antigravity', desc: 'AI Coworker', icon: antigravityImg },
  { name: 'GitHub', desc: 'Version Control', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
  { name: 'npm', desc: 'Package Manager', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg' },
  { name: 'Vercel', desc: 'Deployment', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
  { name: 'AI Studio', desc: 'Google AI', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png' },
  { name: 'Firebase', desc: 'Backend Service', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
  { name: 'Flutter', desc: 'Mobile Dev', icon: flutterImg },
  { name: 'Next.js', desc: 'React Framework', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  { name: 'FastAPI', desc: 'Python Framework', icon: fastapiImg },
];

export default function Tools() {
  return (
    <div className="page-content tools">
      <div className="tools-header">
        <h1 className="tools-main-title">Shovels</h1>
        <p className="tools-main-subtitle">
          Tools I frequently use to make life easier
        </p>
      </div>

      <div className="shovels-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="shovel-card">
            <div className="shovel-icon-wrapper">
              <img src={tool.icon} alt={tool.name} className="shovel-icon" />
            </div>
            <div className="shovel-info">
              <h2 className="shovel-name">{tool.name}</h2>
              <p className="shovel-desc">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import './Tools.css';
import { usePortfolio } from '../services/portfolioService';

export default function Tools() {
  const { tools, getToolImage } = usePortfolio();

  return (
    <div className="page-content tools">
      <div className="tools-header">
        <h1 className="tools-main-title">Shovels</h1>
        <p className="tools-main-subtitle">
          Tools I frequently use to make life easier
        </p>
      </div>

      <div className="shovels-grid">
        {tools && tools.map((tool) => {
          const iconSrc = getToolImage(tool.icon);
          return (
            <div key={tool.name} className="shovel-card">
              <div className="shovel-icon-wrapper">
                {iconSrc ? (
                  <img src={iconSrc} alt={tool.name} className="shovel-icon" />
                ) : (
                  <div className="shovel-icon-placeholder">⚙️</div>
                )}
              </div>
              <div className="shovel-info">
                <h2 className="shovel-name">{tool.name}</h2>
                <p className="shovel-desc">{tool.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

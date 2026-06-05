import React, { createContext, useContext, useState, useEffect } from 'react';
import fallbackData from '../data/portfolio-data.json';

// Project Images
import examgenieImg from '../assets/examgenie.png';
import oneyottaImg from '../assets/oneyottadashboard.png';
import myportalImg from '../assets/myportalDashboard.png';
import spilloImg from '../assets/spillo-exim.png';
import jobpilotImg from '../assets/jobpilot.png';
import oneyottaAppImg from '../assets/oneyottaapp.png';
import nyayaproImg from '../assets/nyayapro.png';

// Tool Images
import keycloakImg from '../assets/keycloak.png';
import antigravityImg from '../assets/antigravity.png';
import flutterImg from '../assets/flutter.png';
import fastapiImg from '../assets/FastAPI.png';

// Change this URL to your raw GitHub Gist/Repository JSON URL to make edits live instantly!
// Example: "https://gist.githubusercontent.com/username/gistid/raw/portfolio-data.json"
const LIVE_DATA_URL = "https://gist.githubusercontent.com/man101jha/a993d6aa0b7aab24e08f9f51c50652fa/raw/portfolio-data.json";

const PortfolioContext = createContext(null);

export function PortfolioDataProvider({ children }) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!LIVE_DATA_URL) {
      return; // Use default bundled local JSON
    }

    setLoading(true);
    fetch(LIVE_DATA_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
      })
      .catch((err) => {
        console.warn('Failed to fetch live portfolio data, falling back to local copy.', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Resolves image reference to either a local import or a remote URL
  const getProjectImage = (imageRef) => {
    if (!imageRef) return null;
    if (imageRef.startsWith('http') || imageRef.startsWith('data:')) {
      return imageRef;
    }
    const projectImageMap = {
      'examgenie.png': examgenieImg,
      'oneyottadashboard.png': oneyottaImg,
      'myportalDashboard.png': myportalImg,
      'spillo-exim.png': spilloImg,
      'jobpilot.png': jobpilotImg,
      'oneyottaapp.png': oneyottaAppImg,
      'nyayapro.png': nyayaproImg,
    };
    return projectImageMap[imageRef] || null;
  };

  const getToolImage = (imageRef) => {
    if (!imageRef) return null;
    if (imageRef.startsWith('http') || imageRef.startsWith('data:')) {
      return imageRef;
    }
    const toolImageMap = {
      'keycloak.png': keycloakImg,
      'antigravity.png': antigravityImg,
      'flutter.png': flutterImg,
      'FastAPI.png': fastapiImg,
    };
    return toolImageMap[imageRef] || null;
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile: data.profile,
        home: data.home,
        about: data.about,
        projects: data.projects,
        experiences: data.experiences,
        tools: data.tools,
        certifications: data.certifications || [],
        getProjectImage,
        getToolImage,
        loading,
        error,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioDataProvider');
  }
  return context;
}

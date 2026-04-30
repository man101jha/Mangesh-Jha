import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './BlogPost';
import './Blogs.css';

export default function Blogs() {
  return (
    <div className="page-content blogs">
      <div className="blogs-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">
          Deep dives on AI engineering, roadmaps, and lessons from building in the trenches.
        </p>
      </div>

      {/* ── Featured post ── */}
      <div className="blogs-featured-label">✦ FEATURED</div>
      <Link to={`/blogs/${blogPosts[0].id}`} className="blogs-featured-card">
        <div className="blogs-featured-image-wrap">
          <img
            src={blogPosts[0].heroImage}
            alt={blogPosts[0].title}
            className="blogs-featured-image"
          />
          <div className="blogs-featured-image-overlay" />
        </div>
        <div className="blogs-featured-content">
          <div className="blogs-featured-meta">
            <span className="blog-date">{blogPosts[0].date}</span>
            <span className="blog-separator">·</span>
            <span className="blog-read-time">{blogPosts[0].readTime}</span>
          </div>
          <h2 className="blogs-featured-title">{blogPosts[0].title}</h2>
          <p className="blogs-featured-excerpt">{blogPosts[0].excerpt}</p>
          <div className="blog-tags">
            {blogPosts[0].tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="blogs-featured-cta">Read article →</div>
        </div>
      </Link>


    </div>
  );
}

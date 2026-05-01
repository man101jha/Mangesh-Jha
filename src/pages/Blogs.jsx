import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './BlogPost';
import './Blogs.css';

export default function Blogs() {
  const featured = blogPosts[0];          // newest = prompt engineering
  const rest = blogPosts.slice(1);        // roadmap

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
      <Link to={`/blogs/${featured.id}`} className="blogs-featured-card">
        <div className="blogs-featured-image-wrap">
          <img
            src={featured.heroImage}
            alt={featured.title}
            className="blogs-featured-image"
          />
          <div className="blogs-featured-image-overlay" />
        </div>
        <div className="blogs-featured-content">
          <div className="blogs-featured-meta">
            <span className="blog-date">{featured.date}</span>
            <span className="blog-separator">·</span>
            <span className="blog-read-time">{featured.readTime}</span>
          </div>
          <h2 className="blogs-featured-title">{featured.title}</h2>
          <p className="blogs-featured-excerpt">{featured.excerpt}</p>
          <div className="blog-tags">
            {featured.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div className="blogs-featured-cta">Read article →</div>
        </div>
      </Link>

      {/* ── More articles ── */}
      {rest.length > 0 && (
        <>
          <div className="blogs-section-label" style={{ marginTop: '8px' }}>MORE ARTICLES</div>
          <div className="blogs-list">
            {rest.map(post => (
              <Link key={post.id} to={`/blogs/${post.id}`} className="blog-item">
                <div className="blog-item-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-separator">·</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <div className="blog-title">{post.title}</div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

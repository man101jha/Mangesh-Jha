import React from 'react';
import './Blogs.css';

const blogs = [
  {
    id: 1,
    title: 'Building AI Products That Actually Ship',
    excerpt:
      'Practical notes on going from idea to production — how I approach scope, speed, and quality without burning out.',
    date: 'Mar 2025',
    readTime: '5 min read',
    tags: ['AI', 'Product'],
    url: '#',
  },
  {
    id: 2,
    title: 'Why Most AI Demos Never Become Products',
    excerpt:
      'The gap between a cool demo and a usable product is huge. Here\'s what I\'ve learned after building both.',
    date: 'Feb 2025',
    readTime: '7 min read',
    tags: ['AI', 'Engineering'],
    url: '#',
  },
  {
    id: 3,
    title: 'The Art of Scope Minimization',
    excerpt:
      'The best feature you can build is sometimes the one you decide not to build. A practical framework for saying no.',
    date: 'Jan 2025',
    readTime: '4 min read',
    tags: ['Product', 'Startups'],
    url: '#',
  },
  {
    id: 4,
    title: 'LLMs as Thinking Partners, Not Answer Machines',
    excerpt:
      'How I changed from using AI to get answers to using AI to stress-test my thinking — and why it made me better.',
    date: 'Dec 2024',
    readTime: '6 min read',
    tags: ['AI', 'Productivity'],
    url: '#',
  },
  {
    id: 5,
    title: 'Lessons from Raising Pre-Seed Funding',
    excerpt:
      'Everything I wish I had known about angel rounds, pitch decks, and the emotional rollercoaster of fundraising.',
    date: 'Nov 2024',
    readTime: '9 min read',
    tags: ['Startups', 'Funding'],
    url: '#',
  },
];

export default function Blogs() {
  return (
    <div className="page-content blogs">
      <h1 className="page-title">Blogs</h1>
      <p className="page-subtitle">
        Notes on AI engineering, product building, and lessons from the trenches.
      </p>

      <div className="blogs-list">
        {blogs.map(blog => (
          <a key={blog.id} href={blog.url} className="blog-item">
            <div className="blog-item-meta">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-separator">·</span>
              <span className="blog-read-time">{blog.readTime}</span>
            </div>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-excerpt">{blog.excerpt}</p>
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

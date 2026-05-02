import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Wire up to your backend / Formspree / EmailJS here
    setSent(true);
  };

  return (
    <div className="page-content contact">
      <h1 className="page-title">Get In Touch</h1>
      <p className="page-subtitle">
        Have an idea, opportunity, or just want to say hi? I read every message.
      </p>

      <div className="contact-layout">
        {/* Left: quick links */}
        <div className="contact-info">
          <div className="contact-link-group">
            <div className="contact-link-label">Email</div>
            <a href="mailto:mangesh105jha@gmail.com" className="contact-link">
              mangesh105jha@gmail.com ↗
            </a>
          </div>

          <div className="contact-link-group">
            <div className="contact-link-label">Location</div>
            <span className="contact-link">
              Mumbai, India
            </span>
          </div>

          <div className="contact-link-group">
            <div className="contact-link-label">LinkedIn</div>
            <a
              href="https://linkedin.com/in/mangesh-jha"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/mangesh-jha ↗
            </a>
          </div>

          <div className="contact-link-group">
            <div className="contact-link-label">GitHub</div>
            <a
              href="https://github.com/man101jha"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/man101jha ↗
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-wrapper">
          {sent ? (
            <div className="contact-success">
              <span className="contact-success-icon">✓</span>
              <div>
                <div className="contact-success-title">Message sent!</div>
                <div className="contact-success-sub">
                  I'll get back to you within 24–48 hours.
                </div>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="cta-btn cta-btn--primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

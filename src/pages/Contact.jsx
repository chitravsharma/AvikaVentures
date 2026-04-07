import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Contact Us</span>
          <h1 className="section-title" style={{ maxWidth: 600, margin: '0 auto 20px' }}>
            Let's <span className="text-gradient">Build Something</span> Together
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ready to start your project? Get in touch and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-sent">
                  <div className="contact-sent-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="contact-form-title">Send Us a Message</h2>
                  <div className="contact-form-grid">
                    <div className="contact-field">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="service">Service Needed</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="design">UI/UX Design</option>
                        <option value="security">Cybersecurity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="contact-field">
                      <label htmlFor="budget">Budget Range</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget...</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-field" style={{ marginTop: 16 }}>
                    <label htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message} onChange={handleChange} required rows={5} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h3>Email</h3>
                <a href="mailto:info@avikaventures.com">info@avikaventures.com</a>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <h3>Phone</h3>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3>Office</h3>
                <p>123 Innovation Drive<br />San Francisco, CA 94102</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

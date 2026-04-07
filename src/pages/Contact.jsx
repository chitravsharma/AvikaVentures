import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mnjowepg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Avika Ventures: New message from ${form.name}` }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    }
    setSending(false);
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
                        <option value="web">Website Development</option>
                        <option value="software">Software Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="design">UI/UX & Graphic Design</option>
                        <option value="content">Content Creation</option>
                        <option value="support">Technical Support & Maintenance</option>
                        <option value="cloud">Cloud & DevOps Solutions</option>
                        <option value="security">Security & Compliance</option>
                        <option value="ai">AI & Automation</option>
                        <option value="students">Solutions for Students</option>
                        <option value="seniors">Solutions for Seniors</option>
                        <option value="business">Business Solutions</option>
                        <option value="analytics">Analytics & Insights</option>
                        <option value="consulting">Consulting & Strategy</option>
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
                  {error && <p style={{ color: '#ef4444', marginTop: 12, fontSize: '0.9rem' }}>{error}</p>}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                    {!sending && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
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
                <a href="mailto:avikaventures.info@gmail.com">avikaventures.info@gmail.com</a>
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

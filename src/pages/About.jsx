import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const VALUES = [
  { icon: '🎯', title: 'Client-First', desc: 'Your success is our success. We treat every project as a partnership, not a transaction.' },
  { icon: '⚡', title: 'Innovation', desc: 'We stay ahead of the curve with cutting-edge technologies and modern development practices.' },
  { icon: '🛡️', title: 'Quality', desc: 'Clean code, rigorous testing, and best practices. We build software that lasts.' },
  { icon: '🤝', title: 'Transparency', desc: 'Open communication, honest timelines, and no surprises. You always know where your project stands.' },
];

const TEAM = [
  { name: 'Avika S.', role: 'Founder & CEO', bio: 'Visionary leader with 10+ years in software consulting and digital strategy.' },
  { name: 'Raj Patel', role: 'CTO', bio: 'Full-stack architect specializing in scalable cloud-native applications.' },
  { name: 'Maya Chen', role: 'Lead Designer', bio: 'Award-winning UX designer passionate about creating intuitive digital experiences.' },
  { name: 'Alex Kumar', role: 'Engineering Lead', bio: 'Expert in DevOps, microservices, and building high-performance systems.' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">About Us</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto 20px' }}>
            Building the <span className="text-gradient">Future of Software</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We're a team of passionate developers, designers, and strategists helping businesses
            succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="section-container">
          <div className="about-story-grid">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From Vision to <span className="text-gradient">Reality</span></h2>
              <p className="about-story-text">
                Avika Ventures was founded with a simple belief: every business deserves access to
                world-class software development. We started as a small team of passionate developers
                and have grown into a full-service development company serving clients across industries.
              </p>
              <p className="about-story-text">
                Today, we combine technical excellence with creative problem-solving to deliver
                solutions that truly make a difference. Whether you're a startup launching your first
                product or an enterprise modernizing legacy systems, we're here to help.
              </p>
            </div>
            <div className="about-story-stats">
              <div className="about-stat-card">
                <span className="about-stat-value">5+</span>
                <span className="about-stat-label">Years in Business</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-value">150+</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-value">20+</span>
                <span className="about-stat-label">Team Members</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-value">12</span>
                <span className="about-stat-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What <span className="text-gradient">Drives</span> Us</h2>
          <div className="grid-4" style={{ marginTop: 48 }}>
            {VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the <span className="text-gradient">People</span> Behind the Code</h2>
          <div className="grid-4" style={{ marginTop: 48 }}>
            {TEAM.map((m, i) => (
              <div key={i} className="card team-card">
                <div className="team-avatar">{m.name.charAt(0)}</div>
                <h3 className="team-name">{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-dark)', textAlign: 'center' }}>
        <div className="section-container">
          <h2 className="section-title">Want to Join Our Team?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            We're always looking for talented people. Check out our open positions.
          </p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

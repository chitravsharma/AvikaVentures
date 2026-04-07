import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const SERVICES_PREVIEW = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20" opacity="0.5"/></svg>
    ),
    title: 'Web Development',
    desc: 'Custom websites and web applications built with modern frameworks like React, Node.js, and cloud infrastructure.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>
    ),
    title: 'Cloud Solutions',
    desc: 'Scalable cloud architecture, DevOps, and deployment on AWS, Azure, and Google Cloud Platform.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
    ),
    title: 'Digital Strategy',
    desc: 'SEO, performance optimization, and digital transformation consulting to grow your online presence.',
  },
];

const TESTIMONIALS = [
  {
    text: "Avika Ventures transformed our outdated platform into a modern, high-performance web application. Their team's expertise is unmatched.",
    name: 'Sarah Chen',
    role: 'CTO, TechFlow Inc.',
  },
  {
    text: "From concept to launch, they delivered our mobile app 2 weeks ahead of schedule. Outstanding communication throughout.",
    name: 'Marcus Rivera',
    role: 'Founder, LaunchPad',
  },
  {
    text: "Their cloud migration strategy saved us 40% on infrastructure costs while improving uptime to 99.99%.",
    name: 'Priya Sharma',
    role: 'VP Engineering, DataSync',
  },
];

const TECH_STACK = [
  'React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL',
  'TypeScript', 'Next.js', 'Flutter', 'Kubernetes', 'MongoDB', 'GraphQL',
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">Software & Web Development</span>
            <h1 className="hero-title">
              We Build<br />
              <span className="text-gradient">Digital Products</span><br />
              That Drive Growth
            </h1>
            <p className="hero-subtitle">
              Avika Ventures is a full-service software development company crafting
              high-performance websites, mobile apps, and cloud solutions for startups and enterprises.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-code-window">
              <div className="code-dots"><span /><span /><span /></div>
              <pre className="code-block">
{`const avikaVentures = {
  mission: "Build exceptional
            digital products",
  stack: ["React", "Node.js",
          "Cloud", "AI"],
  approach: "Agile & Modern"
};

avikaVentures.start();
// Let's build something
// amazing together.`}
              </pre>
            </div>
          </div>
          <div className="hero-projects">
            <h3 className="hero-projects-title">Featured Projects</h3>
            <a href="https://saatsaheli.com" target="_blank" rel="noopener noreferrer" className="hero-project-card saatsaheli-card">
              <div className="saatsaheli-header">
                <img src="/saatsaheli-logo.png" alt="SaatSaheli" className="saatsaheli-logo" />
                <div>
                  <h4>SaatSaheli</h4>
                  <span className="saatsaheli-tagline">Be Your True Self</span>
                </div>
              </div>
              <div className="project-tag" style={{ background: 'rgba(234,179,8,0.15)', color: '#eab308' }}>Live Project</div>
              <p>A creative platform for writers, readers, and artists — featuring book publishing, community chat, magazines, and AI-powered content tools.</p>
              <div className="project-tech">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>AI</span>
              </div>
              <span className="project-link" style={{ color: '#eab308' }}>
                saatsaheli.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" id="services-preview">
        <div className="section-container">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span className="text-gradient">Accelerate</span> Your Business
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            End-to-end software development services tailored to your business needs.
          </p>
          <div className="grid-2">
            {SERVICES_PREVIEW.map((svc, i) => (
              <div key={i} className="card service-preview-card">
                <div className="spc-icon">{svc.icon}</div>
                <h3 className="spc-title">{svc.title}</h3>
                <p className="spc-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline">
              View All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section tech-section">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Technology</span>
          <h2 className="section-title">Our Tech Stack</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            We work with the latest and most reliable technologies.
          </p>
          <div className="tech-grid">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="tech-tag">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="section-container">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our <span className="text-gradient">Clients</span> Say</h2>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card testimonial-card">
                <div className="testimonial-stars">
                  {'★★★★★'}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Build Something Amazing?</h2>
          <p className="cta-desc">
            Let's discuss your project and find the perfect solution for your business.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
              Get Started Today
            </Link>
            <a href="mailto:avikaventures.info@gmail.com" className="btn btn-outline">
              avikaventures.info@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

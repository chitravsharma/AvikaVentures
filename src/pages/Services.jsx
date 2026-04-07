import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Custom Web Development',
    desc: 'Full-stack web applications built with React, Next.js, Node.js, and modern frameworks. From single-page apps to complex enterprise platforms.',
    features: ['React / Next.js', 'Node.js / Express', 'REST & GraphQL APIs', 'Database Design'],
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: 'Mobile App Development',
    desc: 'Cross-platform and native mobile applications for iOS and Android. Beautiful, performant apps your users will love.',
    features: ['React Native', 'Flutter', 'iOS / Swift', 'Android / Kotlin'],
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
    title: 'Cloud & DevOps',
    desc: 'Cloud architecture, migration, and DevOps automation. Scale your infrastructure with confidence and reduce costs.',
    features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    title: 'UI/UX Design',
    desc: 'User-centered design that converts. Research-driven interfaces, prototyping, and design systems that delight users.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Design Systems'],
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Cybersecurity',
    desc: 'Security audits, penetration testing, and secure development practices. Protect your business from modern threats.',
    features: ['Security Audits', 'Penetration Testing', 'Secure Architecture', 'Compliance'],
  },
  {
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'Digital Transformation',
    desc: 'Modernize legacy systems, optimize workflows, and implement digital-first strategies for your organization.',
    features: ['Legacy Migration', 'Process Automation', 'API Integration', 'Data Analytics'],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and technical requirements through in-depth consultation.' },
  { step: '02', title: 'Planning', desc: 'Architecture design, technology selection, and project roadmap with clear milestones.' },
  { step: '03', title: 'Development', desc: 'Agile development with weekly sprints, demos, and continuous feedback loops.' },
  { step: '04', title: 'Launch & Support', desc: 'Deployment, monitoring, and ongoing support to ensure long-term success.' },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Services</span>
          <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto 20px' }}>
            End-to-End <span className="text-gradient">Software Development</span> Services
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From idea to deployment, we provide comprehensive solutions to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="section-container">
          <div className="grid-3">
            {SERVICES.map((svc, i) => (
              <div key={i} className="card service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
                <ul className="service-features">
                  {svc.features.map((f, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our <span className="text-gradient">Process</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 60px' }}>
            A proven approach that delivers results on time and on budget.
          </p>
          <div className="grid-4">
            {PROCESS.map((p, i) => (
              <div key={i} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-container">
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px' }}>
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

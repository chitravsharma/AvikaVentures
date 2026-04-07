import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const VALUES = [
  { icon: '💡', title: 'Creativity First', desc: 'We believe great software starts with imagination. Every project begins with asking "what if?" — not just "how?"' },
  { icon: '🤝', title: 'Human-Centered', desc: 'Technology should serve people, not the other way around. We build solutions that are intuitive, accessible, and meaningful.' },
  { icon: '🌱', title: 'Grow Together', desc: 'Your growth is our mission. From students to startups to seniors — we meet you where you are and help you reach further.' },
  { icon: '🔧', title: 'Built to Last', desc: 'We don\'t cut corners. Clean code, modern architecture, and thoughtful design — because your project deserves our best work.' },
];

const BELIEFS = [
  { icon: '🧠', title: 'AI for Good', desc: 'We integrate AI to empower people — automating the mundane so humans can focus on what matters most.' },
  { icon: '📚', title: 'Education & Access', desc: 'We\'re passionate about making technology accessible to students, learners, and underserved communities.' },
  { icon: '👴', title: 'Inclusive by Design', desc: 'From seniors to first-time users, we design with empathy — because everyone deserves great digital experiences.' },
  { icon: '🌍', title: 'Impact Over Profit', desc: 'We choose projects that make a difference. Real solutions for real people — that\'s what gets us out of bed.' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">About Us</span>
          <h1 className="section-title" style={{ maxWidth: 750, margin: '0 auto 20px' }}>
            Where <span className="text-gradient">Technology</span> Meets <span className="text-gradient">Humanity</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 650 }}>
            We're not just building software — we're building tools that help people create, connect, learn, and grow.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="section-container">
          <div className="about-story-grid">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Born from a <span className="text-gradient">Simple Idea</span></h2>
              <p className="about-story-text">
                Avika Ventures started with a question: what if technology could be built with the same care
                and creativity as art? We saw too many businesses struggling with cookie-cutter solutions that
                didn't fit — and too many people underserved by the tech industry.
              </p>
              <p className="about-story-text">
                So we set out to do things differently. Our first project, <a href="https://saatsaheli.com" target="_blank" rel="noopener noreferrer" style={{ color: '#eab308' }}>SaatSaheli</a>,
                is a creative platform for writers, artists, and readers — a place where technology enables human
                expression. It's proof of what we believe: that the best software comes from understanding people first,
                and writing code second.
              </p>
              <p className="about-story-text">
                Today, we bring that same philosophy to every project we take on — whether it's a business website,
                a mobile app, an AI-powered tool, or a platform that helps seniors stay connected with their families.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-highlight-card">
                <span className="about-highlight-emoji">🚀</span>
                <h3>What We Build</h3>
                <p>Websites, mobile apps, SaaS platforms, AI tools, cloud infrastructure, and custom software — from idea to launch and beyond.</p>
              </div>
              <div className="about-highlight-card">
                <span className="about-highlight-emoji">❤️</span>
                <h3>Who We Build For</h3>
                <p>Students, startups, small businesses, enterprises, seniors, creators, educators — anyone with a vision and a desire to grow.</p>
              </div>
              <div className="about-highlight-card">
                <span className="about-highlight-emoji">⚡</span>
                <h3>How We Build</h3>
                <p>Modern tech stack, agile approach, transparent communication, and a relentless focus on quality and user experience.</p>
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

      {/* What We Believe */}
      <section className="section">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Beliefs</span>
          <h2 className="section-title">Technology with <span className="text-gradient">Purpose</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            We don't just write code — we build with intention.
          </p>
          <div className="grid-4">
            {BELIEFS.map((b, i) => (
              <div key={i} className="card belief-card">
                <span className="belief-icon">{b.icon}</span>
                <h3 className="belief-title">{b.title}</h3>
                <p className="belief-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Work in Action</span>
          <h2 className="section-title">Building <span className="text-gradient">SaatSaheli</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px', maxWidth: 650 }}>
            Our flagship project — a creative platform where writers publish books, artists share their work,
            communities connect through chat, and AI helps bring ideas to life. Built with React, Spring Boot,
            PostgreSQL, and integrated AI services.
          </p>
          <a href="https://saatsaheli.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)' }}>
            Visit SaatSaheli.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-container">
          <h2 className="section-title">Have a Vision? <span className="text-gradient">Let's Build It.</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            Whether you're a student with a project idea, a startup ready to launch, or a business looking to grow —
            we'd love to hear from you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            <a href="mailto:avikaventures.info@gmail.com" className="btn btn-outline">avikaventures.info@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

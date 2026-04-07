import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    emoji: '💻',
    title: 'Website Development',
    desc: 'We create high-performance, responsive websites that deliver a great user experience and drive results.',
    features: [
      'Custom website design & development',
      'Business websites & landing pages',
      'E-commerce websites (online stores)',
      'Website redesign & modernization',
      'CMS development (WordPress, Webflow, etc.)',
      'Mobile-friendly & responsive design',
    ],
  },
  {
    emoji: '⚙️',
    title: 'Software Development',
    desc: 'We build powerful, custom software solutions to automate processes and solve real-world problems.',
    features: [
      'Custom software development',
      'SaaS (Software as a Service) products',
      'CRM & ERP systems',
      'Internal dashboards & business tools',
      'Workflow automation solutions',
      'API development & integrations',
    ],
  },
  {
    emoji: '📱',
    title: 'Mobile App Development',
    desc: 'We design and develop mobile applications that are fast, reliable, and easy to use.',
    features: [
      'Android & iOS app development',
      'Cross-platform apps (Flutter, React Native)',
      'Business & utility apps',
      'Educational & learning apps',
      'App maintenance & updates',
    ],
  },
  {
    emoji: '🎨',
    title: 'UI/UX & Graphic Design',
    desc: 'We design visually appealing and user-friendly experiences that engage your audience.',
    features: [
      'UI/UX design for websites and apps',
      'Wireframing & prototyping',
      'Logo & brand identity design',
      'Flyers, posters, and book covers',
      'Social media graphics',
    ],
  },
  {
    emoji: '✍️',
    title: 'Content Creation Services',
    desc: 'We create high-quality content that communicates your message effectively.',
    features: [
      'Website content writing',
      'Blog articles & SEO content',
      'Product descriptions',
      'Marketing copywriting',
      'Educational & informational content',
      'Design content for flyers & books',
    ],
  },
  {
    emoji: '🛠️',
    title: 'Technical Support & Maintenance',
    desc: 'We ensure your website and applications run smoothly and securely.',
    features: [
      'Website hosting setup',
      'Domain configuration',
      'Bug fixing & troubleshooting',
      'Performance optimization',
      'Security updates & monitoring',
      'Ongoing maintenance support',
    ],
  },
  {
    emoji: '☁️',
    title: 'Cloud & DevOps Solutions',
    desc: 'We help you deploy and scale your applications efficiently.',
    features: [
      'Cloud setup (AWS, Google Cloud, Azure)',
      'Deployment & hosting solutions',
      'CI/CD pipeline implementation',
      'Server management',
      'Backup & recovery systems',
    ],
  },
  {
    emoji: '🔐',
    title: 'Security & Compliance',
    desc: 'We protect your digital assets and ensure secure operations.',
    features: [
      'SSL setup & website security',
      'Data protection & encryption',
      'Secure authentication systems',
      'Vulnerability testing',
      'Compliance support (GDPR, etc.)',
    ],
  },
  {
    emoji: '🧠',
    title: 'AI & Automation',
    desc: 'We integrate intelligent solutions to improve efficiency and user experience.',
    features: [
      'AI chatbots & virtual assistants',
      'Workflow automation',
      'AI-powered content tools',
      'Data analysis & insights',
      'Smart business solutions',
    ],
  },
  {
    emoji: '👨‍🎓',
    title: 'Solutions for Students',
    desc: 'We support students with learning and project-based solutions.',
    features: [
      'Educational apps & platforms',
      'Portfolio website development',
      'Project & assignment support',
      'Coding mentorship & guidance',
      'Learning tools & resources',
    ],
  },
  {
    emoji: '👴',
    title: 'Solutions for Seniors',
    desc: 'We build simple, accessible technology designed for ease of use.',
    features: [
      'Easy-to-use apps & websites',
      'Health & wellness tracking tools',
      'Video communication solutions',
      'Appointment & scheduling tools',
      'Tech support & training',
    ],
  },
  {
    emoji: '🏢',
    title: 'Business Solutions',
    desc: 'We help businesses streamline operations and grow efficiently.',
    features: [
      'Business websites & e-commerce',
      'Customer management systems (CRM)',
      'Inventory & order management',
      'Booking & scheduling systems',
      'Automation of business workflows',
      'Data analytics & reporting dashboards',
    ],
  },
  {
    emoji: '📊',
    title: 'Analytics & Insights',
    desc: 'We help you understand your users and make data-driven decisions.',
    features: [
      'Website analytics setup',
      'User behavior tracking',
      'Business dashboards',
      'Data visualization',
      'Performance reporting',
    ],
  },
  {
    emoji: '💡',
    title: 'Consulting & Strategy',
    desc: 'We guide you from idea to execution with expert advice.',
    features: [
      'Technology consulting',
      'Product strategy & planning',
      'MVP (Minimum Viable Product) development',
      'Startup guidance',
      'Digital transformation consulting',
    ],
  },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and technical requirements through in-depth consultation.' },
  { step: '02', title: 'Planning', desc: 'Architecture design, technology selection, and project roadmap with clear milestones.' },
  { step: '03', title: 'Development', desc: 'Agile development with weekly sprints, demos, and continuous feedback loops.' },
  { step: '04', title: 'Launch & Support', desc: 'Deployment, monitoring, and ongoing support to ensure long-term success.' },
];

const WHY_CHOOSE_US = [
  'Custom solutions tailored to your needs',
  'Focus on quality, performance, and scalability',
  'Modern technologies and best practices',
  'Dedicated support and communication',
  'Solutions for all types of users and industries',
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">🚀 Our Services</span>
          <h1 className="section-title" style={{ maxWidth: 800, margin: '0 auto 20px' }}>
            End-to-End <span className="text-gradient">Software & Website Development</span> Solutions
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: 700 }}>
            From idea to launch—and beyond—we deliver modern, scalable, and user-friendly digital solutions
            designed to help individuals, students, startups, and businesses grow in today's fast-moving digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="section-container">
          <div className="services-grid">
            {SERVICES.map((svc, i) => (
              <div key={i} className="card service-card">
                <div className="service-emoji">{svc.emoji}</div>
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

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <span className="section-label">🌟 Why Choose Us</span>
          <h2 className="section-title">Why Choose <span className="text-gradient">Avika Ventures</span>?</h2>
          <div className="why-choose-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="why-choose-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
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
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-dark)' }}>
        <div className="section-container">
          <span className="section-label">📩 Let's Build Something Great</span>
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 20px' }}>
            Need help with your website, software, or design? Contact us today to schedule a consultation or request support.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 36 }}>
            📧 <a href="mailto:avikaventures.info@gmail.com" style={{ color: 'var(--primary-light)' }}>avikaventures.info@gmail.com</a>
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

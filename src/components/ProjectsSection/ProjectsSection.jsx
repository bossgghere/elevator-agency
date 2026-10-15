import React, { useState } from 'react';
import './ProjectsSection.css';

const projects = [
  {
    id: 'snaplay',
    title: 'SnapLay',
    badge: '10K+ DOWNLOADS',
    category: 'Mobile / Video Platform',
    image: '/assets/snapplay.png',
    description: 'High-speed video creation and social media mobile app featured on the Google Play Store with over 10,000 active installs.',
    tags: ['React Native', 'FastAPI', 'AWS S3', 'Node.js'],
    accent: '#3b82f6',
    link: 'https://play.google.com/store',
  },
  {
    id: 'algotrade',
    title: 'AlgoTrade · Algo Chowk',
    badge: 'AI FULL-STACK',
    category: 'Autonomous Multi-Agent AI',
    image: '/assets/algotrade.jpg',
    description: 'Autonomous financial intelligence and market signal processing pipeline leveraging multi-agent decision graphs.',
    tags: ['FastAPI', 'LangGraph', 'Gemini AI', 'Supabase', 'Python'],
    accent: '#10b981',
    link: '#',
  },
  {
    id: 'elevenstore',
    title: '11ven Store',
    badge: 'FOUNDER BRAND',
    category: 'E-Commerce / Streetwear',
    image: '/assets/elevenstore.png',
    description: 'Custom luxury streetwear and apparel e-commerce platform founded by Gourav, built for conversion and seamless customer journeys.',
    tags: ['Next.js', 'Shopify Storefront', 'TailwindCSS', 'Stripe'],
    accent: '#f59e0b',
    link: 'https://11ven.store',
  },
  {
    id: 'onedaystudio',
    title: 'One Day Studio',
    badge: 'DEV AGENCY',
    category: 'Digital Product Studio',
    image: '/assets/onedaystudio.jpg',
    description: 'Developer agency founded by Gourav shipping production-ready web and mobile platforms for high-growth startups across the globe.',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Cloud Infra'],
    accent: '#8b5cf6',
    link: 'https://onedaystudio.in',
  },
  {
    id: 'spectraq',
    title: 'SpectraQ',
    badge: 'ENTERPRISE OPS',
    category: 'Web Platform & Infrastructure',
    image: '/assets/spectraq.png',
    description: 'High-throughput enterprise workflow system and operations portal built for agile project orchestration.',
    tags: ['React', 'PostgreSQL', 'Tailwind', 'REST APIs'],
    accent: '#06b6d4',
    link: '#',
  },
  {
    id: 'renard',
    title: 'Renard Live',
    badge: 'INTERACTIVE WEB',
    category: 'Real-Time Streaming Platform',
    image: '/assets/renard.png',
    description: 'Low-latency interactive web platform engineered for real-time community engagement and modern digital experiences.',
    tags: ['Next.js', 'WebSockets', 'TailwindCSS', 'Vercel'],
    accent: '#ec4899',
    link: 'https://renard.live',
  },
  {
    id: 'makerble',
    title: 'Makerble',
    badge: 'SAAS ENGINE',
    category: 'Impact Analytics & Metrics',
    image: '/assets/makerble.png',
    description: 'Comprehensive social impact data engine and enterprise reporting platform with rich dashboards.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Cloud'],
    accent: '#f97316',
    link: '#',
  },
  {
    id: 'outceedo',
    title: 'Outceedo',
    badge: 'MARKETPLACE',
    category: 'Sports & Commerce Platform',
    image: '/assets/outceedo.png',
    description: 'Modern sports marketplace platform connecting athletes, gear merchants, and training facilities in one place.',
    tags: ['Next.js', 'Stripe Connect', 'Tailwind', 'Cloudflare'],
    accent: '#14b8a6',
    link: 'https://outceedo.com',
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'AI & SYSTEMS', 'MOBILE', 'WEB & COMMERCE'];

  const filteredProjects = projects.filter(p => {
    if (filter === 'ALL') return true;
    if (filter === 'AI & SYSTEMS') return p.tags.some(t => t.includes('AI') || t.includes('LangGraph') || t.includes('FastAPI'));
    if (filter === 'MOBILE') return p.category.includes('Mobile') || p.tags.includes('React Native');
    if (filter === 'WEB & COMMERCE') return p.category.includes('Commerce') || p.category.includes('Web') || p.tags.includes('Next.js');
    return true;
  });

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-eyebrow">
            <span className="dot-pulse" />
            <span>PRODUCTION DELIVERIES</span>
          </div>
          <h2 className="projects-title">What I Build & Ship</h2>
          <p className="projects-subtitle">
            A curated selection of production apps, AI platforms, and commercial ventures built with zero fluff and maximum velocity.
          </p>

          {/* Filter Pills */}
          <div className="filter-pill-group">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <article 
              key={p.id} 
              className="project-card"
              style={{ '--accent-glow': p.accent }}
            >
              <div className="project-thumbnail-wrapper">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="project-img" 
                  loading="lazy" 
                />
                <div className="project-badge">{p.badge}</div>
                <div className="thumbnail-glass-overlay" />
              </div>

              <div className="project-card-body">
                <span className="project-category">{p.category}</span>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.description}</p>
                
                <div className="project-tag-list">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <a 
                    href={p.link !== '#' ? p.link : '#contact'} 
                    target={p.link !== '#' ? '_blank' : '_self'} 
                    rel="noreferrer" 
                    className="project-link-btn"
                  >
                    <span>View Live</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Callout Banner */}
        <div className="founder-stats-strip">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">App Installs</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">800+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Ship Velocity</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">42</span>
            <span className="stat-label">Penthouse Level</span>
          </div>
        </div>

      </div>
    </section>
  );
}

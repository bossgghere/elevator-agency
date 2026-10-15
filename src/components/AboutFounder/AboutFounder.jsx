import React from 'react';
import './AboutFounder.css';

export function AboutFounder() {
  const capabilities = [
    { title: 'AI & Multi-Agent Architecture', detail: 'Autonomous agents with LangGraph, Gemini API, FastAPI & Supabase' },
    { title: 'Full-Stack Web & Platforms', detail: 'High-performance React & Next.js architectures built for SEO and speed' },
    { title: 'Cross-Platform Mobile Apps', detail: 'Native-feel iOS & Android apps shipped to App Store and Google Play' },
    { title: 'Production Cloud & Infra', detail: 'Scalable PostgreSQL, Dockerized microservices, APIs, and edge deployment' },
  ];

  return (
    <section className="founder-section" id="about-founder">
      <div className="founder-container">
        
        <div className="founder-grid">
          {/* Left Column: Visual & Portrait */}
          <div className="founder-media-col">
            <div className="founder-image-card">
              <div className="portrait-wrapper">
                <img 
                  src="/assets/gourav_founder.jpg" 
                  alt="Gourav Raut — Founder & Lead Architect" 
                  className="founder-portrait"
                />
                <div className="portrait-glow-border" />
              </div>

              {/* Status Pill */}
              <div className="founder-status-badge">
                <span className="live-pulse-dot" />
                <span>AVAILABLE FOR Q4 / Q1 BUILDS</span>
              </div>

              {/* Founder Credential Card */}
              <div className="founder-card-caption">
                <h3 className="founder-name">Gourav Raut</h3>
                <p className="founder-role">Founder · One Day Studio & 11ven</p>
                <p className="founder-loc">Hyderabad, India · Working Globally</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="founder-bio-col">
            <div className="section-eyebrow">
              <span className="dot-pulse" />
              <span>THE FOUNDER</span>
            </div>

            <h2 className="bio-headline">
              Software Architect by Craft.<br />
              <span className="highlight-text">Builder & Founder by Nature.</span>
            </h2>

            <p className="bio-paragraph lead">
              I’m Gourav — a software engineer finishing CSE-AIML in Hyderabad. I build, ship, and maintain production applications used by thousands of real users worldwide.
            </p>

            <p className="bio-paragraph">
              Currently engineering agentic AI platforms at <strong>Algo Chowk</strong> with FastAPI, LangGraph, and Gemini. Beyond consulting, I founded the developer agency <strong>One Day Studio</strong> and the streetwear brand <strong>11ven</strong>.
            </p>

            <p className="bio-paragraph quote-box">
              “Rome wasn't built in a day. We ship in one. No bloated agency layers, no months of stalling — just rigorous engineering and high-velocity shipping.”
            </p>

            {/* Core Capabilities */}
            <div className="capabilities-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="capability-card">
                  <div className="cap-index">0{i + 1}</div>
                  <div>
                    <h4 className="cap-title">{cap.title}</h4>
                    <p className="cap-detail">{cap.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="founder-cta-group">
              <button
                type="button"
                data-cal-link="samosa.wtf/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="btn-founder-primary"
              >
                <span className="dot-live" />
                <span>Book 15-Min Intro</span>
              </button>

              <a 
                href="https://linkedin.com/in/gourav-raut" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-founder-secondary"
              >
                LinkedIn Profile
              </a>
              
              <a 
                href="https://github.com/bossgghere" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-founder-secondary"
              >
                GitHub
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

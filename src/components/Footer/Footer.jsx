import React from 'react';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="f-title">GOURAV RAUT</span>
            <span className="f-sub">FOUNDER · ONE DAY STUDIO & 11VEN</span>
            <p className="f-tagline">“Rome wasn't built in a day. We ship in one.”</p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <div className="footer-links">
              <a href="#elevator-hero">Level 42 Penthouse</a>
              <a href="#reserve-section">Milestone Toast</a>
              <a href="#projects-section">Production Work</a>
              <a href="#about-founder">The Founder</a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">VENTURES & SOCIAL</h4>
            <div className="footer-links">
              <a href="https://onedaystudio.in" target="_blank" rel="noreferrer">One Day Studio ↗</a>
              <a href="https://11ven.store" target="_blank" rel="noreferrer">11ven Store ↗</a>
              <a href="https://linkedin.com/in/gourav-raut" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/bossgghere" target="_blank" rel="noreferrer">GitHub (@bossgghere) ↗</a>
            </div>
          </div>

          <div className="footer-cta-col">
            <h4 className="footer-heading">LET'S BUILD</h4>
            <p className="footer-cta-desc">Ready to turn an ambitious vision into production software?</p>
            <button 
              type="button"
              data-cal-link="samosa.wtf/15min" 
              data-cal-namespace="15min" 
              data-cal-config='{"layout":"month_view","theme":"dark"}' 
              className="footer-cal-btn"
            >
              <span>Schedule 15-Min Intro</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gourav Raut · One Day Studio. All rights reserved.</p>
          <button className="footer-top-btn" onClick={scrollToTop} title="Scroll back to top">
            <span>Back to Level 42</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}

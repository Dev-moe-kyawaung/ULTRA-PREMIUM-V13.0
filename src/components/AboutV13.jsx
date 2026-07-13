import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutV13.css';

gsap.registerPlugin(ScrollTrigger);

const AboutV13 = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('journey');
  const [counts, setCounts] = useState({ years: 0, apps: 0, repos: 0, clients: 0 });

  const tabs = [
    { id: 'journey', label: 'Journey', icon: '🚀' },
    { id: 'expertise', label: 'Expertise', icon: '💎' },
    { id: 'philosophy', label: 'Philosophy', icon: '🧠' }
  ];

  const milestones = [
    { year: '2012', title: 'The Beginning', desc: 'Started Android development journey', color: '#00ffff' },
    { year: '2015', title: 'Team Lead', desc: 'Leading 5-member development team', color: '#ff00ff' },
    { year: '2018', title: 'Kotlin Migration', desc: 'Migrated 20+ apps to Kotlin', color: '#ffff00' },
    { year: '2020', title: 'Compose Pioneer', desc: 'Early adopter of Jetpack Compose', color: '#00ff00' },
    { year: '2022', title: 'Architecture Expert', desc: 'Specialized in Clean Architecture', color: '#ff0080' },
    { year: '2024', title: 'Industry Leader', desc: '3200+ apps delivered worldwide', color: '#00ffff' }
  ];

  const expertiseAreas = [
    { title: 'Mobile Architecture', skills: ['MVVM', 'MVI', 'Clean Architecture', 'Repository Pattern'], level: 95 },
    { title: 'Modern UI', skills: ['Jetpack Compose', 'Material 3', 'Custom Components'], level: 92 },
    { title: 'Backend Integration', skills: ['REST APIs', 'GraphQL', 'WebSocket', 'gRPC'], level: 88 },
    { title: 'Performance', skills: ['Profiling', 'Memory Optimization', 'Battery Efficiency'], level: 90 }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const targets = { years: 12, apps: 3200, repos: 122, clients: 450 };
      const duration = 2000;
      const start = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);

        setCounts({
          years: Math.floor(targets.years * progress),
          apps: Math.floor(targets.apps * progress),
          repos: Math.floor(targets.repos * progress),
          clients: Math.floor(targets.clients * progress),
        });

        if (progress === 1) clearInterval(interval);
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // GSAP Animations
    gsap.utils.toArray('.timeline-node').forEach((node, i) => {
      gsap.fromTo(
        node,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-v13">
      {/* Animated Background */}
      <div className="about-bg-v13">
        <div className="hex-grid">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="hex" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      <div className="container-v13">
        {/* Section Header */}
        <div className="section-header-v13">
          <div className="header-line"></div>
          <h2 className="section-title-v13">
            <span className="title-bracket">[</span>
            ABOUT ME
            <span className="title-bracket">]</span>
          </h2>
          <p className="section-subtitle-v13">12 Years of Excellence in Android Development</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid-v13">
          {[
            { value: counts.years, suffix: '+', label: 'Years Experience', icon: '⏱️', color: '#00ffff' },
            { value: counts.apps, suffix: '+', label: 'Apps Delivered', icon: '📱', color: '#ff00ff' },
            { value: counts.repos, suffix: '', label: 'GitHub Repos', icon: '💻', color: '#ffff00' },
            { value: counts.clients, suffix: '+', label: 'Happy Clients', icon: '🤝', color: '#00ff00' }
          ].map((stat, i) => (
            <div key={i} className="stat-box-v13" style={{ '--stat-color': stat.color }}>
              <div className="stat-border-glow"></div>
              <div className="stat-icon-v13">{stat.icon}</div>
              <div className="stat-number-v13">{stat.value}{stat.suffix}</div>
              <div className="stat-label-v13">{stat.label}</div>
              <div className="stat-corner-v13 tl"></div>
              <div className="stat-corner-v13 tr"></div>
              <div className="stat-corner-v13 bl"></div>
              <div className="stat-corner-v13 br"></div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav-v13">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn-v13 ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content-v13">
          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <div className="timeline-v13">
              <div className="timeline-track-v13"></div>
              {milestones.map((milestone, i) => (
                <div key={i} className={`timeline-node ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="node-connector"></div>
                  <div className="node-dot" style={{ '--node-color': milestone.color }}>
                    <div className="dot-pulse-v13"></div>
                  </div>
                  <div className="node-card">
                    <div className="card-corner-v13 tl"></div>
                    <div className="card-corner-v13 tr"></div>
                    <div className="card-corner-v13 bl"></div>
                    <div className="card-corner-v13 br"></div>
                    <div className="node-year" style={{ color: milestone.color }}>{milestone.year}</div>
                    <h4 className="node-title">{milestone.title}</h4>
                    <p className="node-desc">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Expertise Tab */}
          {activeTab === 'expertise' && (
            <div className="expertise-grid-v13">
              {expertiseAreas.map((area, i) => (
                <div key={i} className="expertise-card-v13">
                  <div className="card-header-v13">
                    <h3 className="expertise-title">{area.title}</h3>
                    <div className="expertise-level">
                      <span className="level-text">{area.level}%</span>
                    </div>
                  </div>
                  <div className="expertise-bar">
                    <div className="bar-fill" style={{ width: `${area.level}%` }}>
                      <div className="bar-glow"></div>
                    </div>
                  </div>
                  <div className="expertise-skills">
                    {area.skills.map((skill, j) => (
                      <span key={j} className="skill-tag-v13">{skill}</span>
                    ))}
                  </div>
                  <div className="card-corner-v13 tl"></div>
                  <div className="card-corner-v13 tr"></div>
                  <div className="card-corner-v13 bl"></div>
                  <div className="card-corner-v13 br"></div>
                </div>
              ))}
            </div>
          )}

          {/* Philosophy Tab */}
          {activeTab === 'philosophy' && (
            <div className="philosophy-content">
              <div className="philosophy-card-v13">
                <div className="card-glow-border"></div>
                <h3 className="philosophy-title">Development Philosophy</h3>
                <div className="philosophy-points">
                  <div className="point-item">
                    <span className="point-icon">🎯</span>
                    <div className="point-content">
                      <h4>Clean Code First</h4>
                      <p>Write code that humans can read. Machines will always understand it, but your teammates need to as well.</p>
                    </div>
                  </div>
                  <div className="point-item">
                    <span className="point-icon">🚀</span>
                    <div className="point-content">
                      <h4>Performance Matters</h4>
                      <p>Every millisecond counts. Optimize early, profile often, and never compromise on user experience.</p>
                    </div>
                  </div>
                  <div className="point-item">
                    <span className="point-icon">🔒</span>
                    <div className="point-content">
                      <h4>Security by Design</h4>
                      <p>Security isn't an afterthought. It's baked into every line of code from the very beginning.</p>
                    </div>
                  </div>
                  <div className="point-item">
                    <span className="point-icon">🧪</span>
                    <div className="point-content">
                      <h4>Test Everything</h4>
                      <p>Untested code is broken code waiting to happen. Comprehensive testing ensures reliability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutV13;

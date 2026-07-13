import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './HeroV13.css';

const HeroV13 = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    { title: "Android Architect", icon: "🏗️", color: "#00ffff" },
    { title: "Kotlin Expert", icon: "💎", color: "#ff00ff" },
    { title: "Compose Specialist", icon: "🎨", color: "#ffff00" },
    { title: "Performance Guru", icon: "⚡", color: "#00ff00" }
  ];

  const stats = [
    { value: "12+", label: "Years", unit: "Exp" },
    { value: "3.2K", label: "Apps", unit: "Built" },
    { value: "122", label: "Repos", unit: "GitHub" },
    { value: "100%", label: "Success", unit: "Rate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tl.from('.hero-main-title', { 
      opacity: 0, 
      y: 100, 
      duration: 1.2,
      stagger: 0.1 
    })
    .from('.hero-subtitle-v13', { 
      opacity: 0, 
      scale: 0.5, 
      duration: 0.8 
    }, '-=0.5')
    .from('.hero-description-v13', { 
      opacity: 0, 
      x: -50, 
      duration: 0.8 
    }, '-=0.4')
    .from('.hero-cta-v13 button', { 
      opacity: 0, 
      y: 30, 
      duration: 0.6,
      stagger: 0.15 
    }, '-=0.3')
    .from('.stat-card-v13', { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 90,
      duration: 0.8,
      stagger: 0.1 
    }, '-=0.4');
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero-v13">
      {/* Holographic Grid Background */}
      <div className="holographic-grid">
        <div className="grid-lines horizontal"></div>
        <div className="grid-lines vertical"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="geometric-shapes">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={`geo-shape shape-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Follow Light */}
      <div 
        className="mouse-light"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>

      <div className="container-v13">
        <div className="hero-content-v13">
          {/* Badge */}
          <div className="hero-badge-v13">
            <span className="badge-pulse"></span>
            <span className="badge-text">Available for Projects 2024</span>
          </div>

          {/* Main Title with Split Effect */}
          <div className="hero-title-wrapper">
            <h1 className="hero-main-title">
              <span className="title-line">MOE</span>
              <span className="title-line">KYAW</span>
              <span className="title-line">AUNG</span>
            </h1>
            <div className="title-glow"></div>
          </div>

          {/* Rotating Role */}
          <div className="hero-subtitle-v13">
            <div className="role-container">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className={`role-item ${currentIndex === index ? 'active' : ''}`}
                  style={{ '--role-color': role.color }}
                >
                  <span className="role-icon">{role.icon}</span>
                  <span className="role-text">{role.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="hero-description-v13">
            Architecting <span className="highlight">high-performance</span> Android applications 
            with cutting-edge technologies. Specialized in <span className="highlight">Kotlin</span>, 
            <span className="highlight"> Jetpack Compose</span>, and 
            <span className="highlight"> Clean Architecture</span>.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-v13">
            <button className="cta-primary-v13">
              <span className="button-text">Start Project</span>
              <span className="button-icon">→</span>
              <span className="button-glow"></span>
            </button>
            <button className="cta-secondary-v13">
              <span className="button-text">View Work</span>
              <span className="button-icon">↓</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="hero-stats-v13">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card-v13">
                <div className="stat-border"></div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-unit">{stat.unit}</div>
                </div>
                <div className="stat-corner corner-tl"></div>
                <div className="stat-corner corner-tr"></div>
                <div className="stat-corner corner-bl"></div>
                <div className="stat-corner corner-br"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Holographic Display */}
        <div className="hero-visual-v13">
          <div className="holographic-frame">
            <div className="frame-border"></div>
            
            {/* Central Hologram */}
            <div className="central-hologram">
              <div className="hologram-rings">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="ring" style={{ animationDelay: `${i * 0.3}s` }}></div>
                ))}
              </div>
              
              <div className="hologram-core">
                <div className="core-inner">
                  <span className="core-icon">👨‍💻</span>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="orbit-container">
                {['Kotlin', 'Compose', 'Firebase', 'MVVM'].map((tech, i) => (
                  <div key={i} className="orbit-item" style={{ '--orbit-angle': `${i * 90}deg` }}>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Streams */}
            <div className="data-streams">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="data-line" style={{ left: `${i * 12.5}%` }}></div>
              ))}
            </div>

            {/* Corner Brackets */}
            <div className="corner-brackets">
              <div className="bracket bracket-tl"></div>
              <div className="bracket bracket-tr"></div>
              <div className="bracket bracket-bl"></div>
              <div className="bracket bracket-br"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan Lines Effect */}
      <div className="scan-lines"></div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-v13">
        <div className="scroll-line"></div>
        <div className="scroll-text">SCROLL</div>
      </div>
    </section>
  );
};

export default HeroV13;


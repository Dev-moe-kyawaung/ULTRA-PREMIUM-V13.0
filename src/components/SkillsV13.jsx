import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SkillsV13.css';

gsap.registerPlugin(ScrollTrigger);

const SkillsV13 = () => {
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Kotlin', level: 95, icon: '💎', category: 'Language', color: '#00ffff' },
    { name: 'Jetpack Compose', level: 92, icon: '🎨', category: 'UI', color: '#ff00ff' },
    { name: 'Firebase', level: 88, icon: '🔥', category: 'Backend', color: '#ffff00' },
    { name: 'Clean Architecture', level: 90, icon: '🏗️', category: 'Architecture', color: '#00ff00' },
    { name: 'MVVM', level: 93, icon: '⚡', category: 'Pattern', color: '#ff0080' },
    { name: 'Coroutines', level: 91, icon: '🔄', category: 'Async', color: '#80ff00' },
    { name: 'Room Database', level: 89, icon: '💾', category: 'Database', color: '#0080ff' },
    { name: 'Retrofit', level: 94, icon: '🌐', category: 'Network', color: '#ff8000' },
    { name: 'Dagger/Hilt', level: 87, icon: '💉', category: 'DI', color: '#ff0000' },
    { name: 'Material 3', level: 90, icon: '✨', category: 'Design', color: '#00ffff' },
    { name: 'Git', level: 95, icon: '📦', category: 'Version Control', color: '#ff00ff' },
    { name: 'CI/CD', level: 85, icon: '🚀', category: 'DevOps', color: '#ffff00' }
  ];

  useEffect(() => {
    const hexagons = gsap.utils.toArray('.hex-skill');
    
    hexagons.forEach((hex, i) => {
      gsap.fromTo(
        hex,
        { 
          opacity: 0, 
          scale: 0.3,
          rotation: -180 
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: i * 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: hex,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-v13">
      {/* Animated Circuit Background */}
      <div className="circuit-bg">
        <svg className="circuit-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffff00" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="3"
              fill="url(#circuit-gradient)"
              className="circuit-node"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1920}
              y1={Math.random() * 1080}
              x2={Math.random() * 1920}
              y2={Math.random() * 1080}
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              className="circuit-line"
            />
          ))}
        </svg>
      </div>

      <div className="container-v13">
        {/* Section Header */}
        <div className="section-header-v13">
          <div className="header-line"></div>
          <h2 className="section-title-v13">
            <span className="title-bracket">&lt;</span>
            TECHNICAL SKILLS
            <span className="title-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle-v13">Mastering The Modern Android Ecosystem</p>
        </div>

        {/* Hexagonal Skills Grid */}
        <div className="hex-grid-container">
          <div className="hex-grid-v13">
            {skills.map((skill, i) => (
              <div key={i} className="hex-skill" style={{ '--skill-color': skill.color }}>
                <div className="hex-shape">
                  <div className="hex-inner">
                    <div className="hex-content">
                      <div className="skill-icon-hex">{skill.icon}</div>
                      <div className="skill-name-hex">{skill.name}</div>
                      <div className="skill-category-hex">{skill.category}</div>
                      
                      {/* Circular Progress */}
                      <svg className="progress-circle-hex" viewBox="0 0 100 100">
                        <circle
                          className="progress-bg-hex"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          strokeWidth="4"
                        />
                        <circle
                          className="progress-fill-hex"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          strokeWidth="4"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                          style={{ stroke: skill.color }}
                        />
                      </svg>
                      
                      <div className="skill-level-hex">{skill.level}%</div>
                    </div>
                  </div>
                  
                  {/* Hex Border Glow */}
                  <div className="hex-border-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="tech-stack-summary">
          <div className="stack-card">
            <div className="stack-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Native Android, Kotlin, Java, Flutter</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">🎨</div>
            <h3>UI/UX</h3>
            <p>Jetpack Compose, XML, Material Design 3</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">🔧</div>
            <h3>Tools & DevOps</h3>
            <p>Git, GitHub Actions, Jenkins, Docker</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">☁️</div>
            <h3>Cloud & Backend</h3>
            <p>Firebase, AWS, REST APIs, GraphQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsV13;

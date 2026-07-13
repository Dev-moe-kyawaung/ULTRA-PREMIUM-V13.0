import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsV13.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsV13 = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🌐' },
    { id: 'fintech', label: 'FinTech', icon: '💰' },
    { id: 'health', label: 'Healthcare', icon: '🏥' },
    { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTrack Pro',
      category: 'fintech',
      desc: 'AI-powered personal finance manager with real-time insights',
      image: 'https://picsum.photos/seed/fintrack/600/400',
      tags: ['Kotlin', 'Compose', 'Firebase', 'ML Kit'],
      stats: { users: '50K+', rating: 4.8, downloads: '100K+' },
      color: '#00ffff',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    },
    {
      id: 2,
      title: 'HealthSync',
      category: 'health',
      desc: 'Telemedicine platform with video consultations',
      image: 'https://picsum.photos/seed/healthsync/600/400',
      tags: ['MVVM', 'Room', 'WebRTC', 'Hilt'],
      stats: { users: '85K+', rating: 4.9, downloads: '200K+' },
      color: '#00ff00',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    },
    {
      id: 3,
      title: 'ShopMM',
      category: 'ecommerce',
      desc: 'E-commerce platform with AR product preview',
      image: 'https://picsum.photos/seed/shopmm/600/400',
      tags: ['Compose', 'ARCore', 'Retrofit', 'Paging'],
      stats: { users: '120K+', rating: 4.7, downloads: '300K+' },
      color: '#ff00ff',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    },
    {
      id: 4,
      title: 'CryptoVault',
      category: 'fintech',
      desc: 'Cryptocurrency wallet with hardware security',
      image: 'https://picsum.photos/seed/cryptovault/600/400',
      tags: ['Security', 'Biometric', 'Blockchain', 'Compose'],
      stats: { users: '30K+', rating: 4.9, downloads: '60K+' },
      color: '#ffff00',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    },
    {
      id: 5,
      title: 'MediTracker',
      category: 'health',
      desc: 'Medicine reminder with health analytics',
      image: 'https://picsum.photos/seed/meditracker/600/400',
      tags: ['WorkManager', 'Room', 'Charts', 'Notifications'],
      stats: { users: '65K+', rating: 4.8, downloads: '150K+' },
      color: '#ff0080',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    },
    {
      id: 6,
      title: 'FashionHub',
      category: 'ecommerce',
      desc: 'Fashion marketplace with AI style recommendations',
      image: 'https://picsum.photos/seed/fashionhub/600/400',
      tags: ['ML Kit', 'Compose', 'Firebase', 'Payment'],
      stats: { users: '90K+', rating: 4.6, downloads: '220K+' },
      color: '#80ff00',
      github: 'https://github.com/moekyawaung13721',
      demo: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card-v13');
    
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects-v13">
      {/* Digital Rain Background */}
      <div className="digital-rain">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="rain-column" style={{ left: `${i * 5}%`, animationDelay: `${i * 0.2}s` }}>
            {[...Array(10)].map((_, j) => (
              <span key={j} className="rain-char">{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="container-v13">
        {/* Section Header */}
        <div className="section-header-v13">
          <div className="header-line"></div>
          <h2 className="section-title-v13">
            <span className="title-bracket">{'{'}</span>
            FEATURED PROJECTS
            <span className="title-bracket">{'}'}</span>
          </h2>
          <p className="section-subtitle-v13">Production Applications Delivered Worldwide</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter-v13">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn-v13 ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-label">{cat.label}</span>
              <div className="filter-indicator"></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-v13">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card-v13"
              style={{ '--project-color': project.color }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Border Animation */}
              <div className="card-border-v13"></div>

              {/* Project Image */}
              <div className="project-image-v13">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay-v13">
                  <div className="overlay-content">
                    <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} className="overlay-btn">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                
                {/* Scan Line Effect */}
                <div className={`scan-line-project ${hoveredProject === project.id ? 'active' : ''}`}></div>
              </div>

              {/* Project Content */}
              <div className="project-content-v13">
                <div className="project-header-v13">
                  <h3 className="project-title-v13">{project.title}</h3>
                  <span className="project-category-badge">{project.category}</span>
                </div>

                <p className="project-desc-v13">{project.desc}</p>

                {/* Tags */}
                <div className="project-tags-v13">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-v13">{tag}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="project-stats-v13">
                  <div className="stat-item-v13">
                    <i className="fas fa-users"></i>
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="stat-item-v13">
                    <i className="fas fa-star"></i>
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="stat-item-v13">
                    <i className="fas fa-download"></i>
                    <span>{project.stats.downloads}</span>
                  </div>
                </div>
              </div>

              {/* Corner Indicators */}
              <div className="corner-indicator tl"></div>
              <div className="corner-indicator tr"></div>
              <div className="corner-indicator bl"></div>
              <div className="corner-indicator br"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="projects-footer-v13">
          <a href="https://github.com/moekyawaung13721" target="_blank" rel="noreferrer" className="view-more-btn-v13">
            <span className="btn-text">Explore All Projects</span>
            <span className="btn-icon">→</span>
            <div className="btn-glow"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsV13;

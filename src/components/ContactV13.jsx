import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './ContactV13.css';

const ContactV13 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/moekyawaung13721', label: 'GitHub', color: '#00ffff' },
    { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: 'fab fa-telegram', url: '#', label: 'Telegram', color: '#0088cc' },
    { icon: 'fas fa-envelope', url: 'mailto:moekyawaung13721@gmail.com', label: 'Email', color: '#ff00ff' },
    { icon: 'fab fa-google-play', url: '#', label: 'Play Store', color: '#ffff00' }
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'နာမည်ထည့်ပါ (Name required)';
        if (value.length < 2) return 'အနည်းဆုံး ၂ လုံး (Min 2 chars)';
        return '';
      case 'email':
        if (!value.trim()) return 'အီးမေးလ်လိုအပ်သည် (Email required)';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'မှန်ကန်သောအီးမေးလ် (Invalid email)';
        return '';
      case 'subject':
        if (!value.trim()) return 'ခေါင်းစဉ်လိုအပ်သည် (Subject required)';
        return '';
      case 'message':
        if (!value.trim()) return 'မက်ဆေ့ချ်ထည့်ပါ (Message required)';
        if (value.length < 10) return 'အနည်းဆုံး ၁၀ လုံး (Min 10 chars)';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    ['name', 'email', 'subject', 'message'].forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setTouched({});

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  useEffect(() => {
    gsap.fromTo('.contact-form-v13',
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo('.contact-info-v13',
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <section id="contact" className="contact-v13">
      {/* Particle Background */}
      <div className="particle-bg-v13">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle-v13"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-v13">
        {/* Section Header */}
        <div className="section-header-v13">
          <div className="header-line"></div>
          <h2 className="section-title-v13">
            <span className="title-bracket">&lt;</span>
            GET IN TOUCH
            <span className="title-bracket">/&gt;</span>
          </h2>
          <p className="section-subtitle-v13">Let's Build Something Amazing Together</p>
        </div>

        <div className="contact-grid-v13">
          {/* Contact Form */}
          <div className="contact-form-v13">
            <div className="form-header-v13">
              <h3>Send Message</h3>
              <div className="header-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-v13">
                <div className="form-group-v13">
                  <label>နာမည် / Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? 'error' : formData.name ? 'valid' : ''}
                    placeholder="Your name"
                  />
                  {errors.name && touched.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className="form-group-v13">
                  <label>အီးမေးလ် / Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors

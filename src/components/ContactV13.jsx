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

                    className={errors.email && touched.email ? 'error' : formData.email ? 'valid' : ''}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group-v13">
                <label>ဖုန်းနံပါတ် / Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+95 9 123 456 789"
                />
              </div>

              <div className="form-group-v13">
                <label>ခေါင်းစဉ် / Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.subject && touched.subject ? 'error' : formData.subject ? 'valid' : ''}
                  placeholder="Project inquiry"
                />
                {errors.subject && touched.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group-v13">
                <label>မက်ဆေ့ချ် / Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="6"
                  className={errors.message && touched.message ? 'error' : formData.message ? 'valid' : ''}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && touched.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className={`submit-btn-v13 ${isSubmitting ? 'submitting' : ''} ${submitSuccess ? 'success' : ''}`}>
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <i className="fas fa-check"></i>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
                <div className="btn-glow-v13"></div>
              </button>

              {submitSuccess && (
                <div className="success-message-v13">
                  ကျေးဇူးတင်ပါတယ်! သင့်မက်ဆေ့ချ် ပို့ပြီးပါပြီ။<br />
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-v13">
            <div className="info-card-v13">
              <h3>Contact Information</h3>
              
              <div className="info-items-v13">
                <div className="info-item-v13">
                  <div className="info-icon-v13">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content-v13">
                    <h4>Email</h4>
                    <a href="mailto:moekyawaung13721@gmail.com">moekyawaung13721@gmail.com</a>
                  </div>
                </div>

                <div className="info-item-v13">
                  <div className="info-icon-v13">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content-v13">
                    <h4>Phone</h4>
                    <a href="tel:+959123456789">+95 9 123 456 789</a>
                  </div>
                </div>

                <div className="info-item-v13">
                  <div className="info-icon-v13">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content-v13">
                    <h4>Location</h4>
                    <p>Yangon, Myanmar</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section-v13">
                <h4>Connect With Me</h4>
                <div className="social-links-v13">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link-v13"
                      style={{ '--social-color': social.color }}
                      title={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="availability-badge-v13">
                <div className="status-indicator">
                  <span className="status-dot-v13"></span>
                  <span>Available for Projects</span>
                </div>
                <p>Accepting new Android projects for 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactV13;

                      

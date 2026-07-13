import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroV13 from './components/HeroV13';
import AboutV13 from './components/AboutV13';
import SkillsV13 from './components/SkillsV13';
import Projects3D from './components/Projects3D';
import Contact3D from './components/Contact3D';
import Footer3D from './components/Footer3D';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light', !darkMode);
  };

  if (loading) return <Preloader />;

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={
          <>
            <HeroV13 />
            <AboutV13 />
            <SkillsV13 />
            <Projects3D />
            <Contact3D />
          </>
        } />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer3D />
      <BackToTop />
    </div>
  );
}

export default App;

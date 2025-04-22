import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';  // Add this line
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <CertificationsSection />  {/* Add this line */}
          <ProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
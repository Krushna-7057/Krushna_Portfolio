import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechnicalSkills } from './components/TechnicalSkills';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'architecture', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] relative selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
      {/* 1. Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Technology Stack Marquee */}
        <TechMarquee />

        {/* 4. About / Engineering Profile */}
        <About />

        {/* 5. Featured Projects */}
        <FeaturedProjects />

        {/* 6. Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* 7. Technical Skills */}
        <TechnicalSkills />

        {/* 8. Architecture / Engineering Capabilities */}
        <ArchitectureSection />

        {/* 9. Education & Certifications */}
        <EducationCertifications />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

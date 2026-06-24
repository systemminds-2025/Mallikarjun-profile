import React, { useEffect } from 'react';
import {
  HireModal,
  SuccessToast,
  Hero,
  Features,
  Footer,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from './components';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const {
    activeTab,
    setActiveTab,
    mobileMenuOpen,
    setMobileMenuOpen,
    closeMobileMenu,
    showHireModal,
    setShowHireModal,
    showSuccessToast,
    handleHireMe,
    handleContactSubmit,
  } = useNavigation();

  // Scroll spy implementation using Intersection Observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Capitalize first letter to match constants NAV_ITEMS
          const tabName = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveTab(tabName);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px', // Triggers when section occupies viewport's active area
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveTab]);

  // Scroll reveal Intersection Observer for all sections
  useEffect(() => {
    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -80px 0px',
    });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  // Smooth scroll handler for CTA view work
  const handleViewWork = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('Projects');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between pb-0 relative font-sans">
      {/* Main Content Sections wrapper */}
      <div className="flex-grow w-full space-y-0 relative">
        
        {/* Full-Screen Landing Wrapper (Hero & Highlights) */}
        <div className="relative min-h-screen overflow-x-hidden scrollbar-none bg-[#f8fafc] flex items-center justify-center w-full scroll-reveal py-12 lg:py-0">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col shrink-0">
            <Hero
              onViewWork={handleViewWork}
              onHireClick={handleHireMe}
            />
          </div>
        </div>

        {/* About Me & Education */}
        <About />

        {/* Technical Skills Category Grids */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Connect & Direct Message Form */}
        <Contact onSubmit={handleContactSubmit} />
      </div>

      {/* Hire Me Modal Form */}
      <HireModal
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        onSubmit={handleContactSubmit}
      />

      {/* Message Success Toast */}
      <SuccessToast isOpen={showSuccessToast} />
    </div>
  );
}

export default App;

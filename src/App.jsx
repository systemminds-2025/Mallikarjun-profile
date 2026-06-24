import React, { useEffect } from 'react';
import {
  HireModal,
  SuccessToast,
  Hero,
  Features,
  About,
  Skills,
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
    const sectionIds = ['home', 'about', 'skills'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'home' && window.scrollY > 200) {
            return;
          }
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
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('Skills');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] flex flex-col justify-between pb-0 relative font-sans">
      {/* Main Content Sections wrapper */}
      <div className="flex-grow w-full space-y-0 relative">
        
        {/* Hero Section (Sticky/Fixed Background on Desktop) */}
        <div className="w-full bg-[#FFFAFA] relative md:sticky md:top-0 z-0 pt-16 md:pt-24 lg:pt-32 pb-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
            <Hero
              onViewWork={handleViewWork}
              onHireClick={handleHireMe}
            />
          </div>
        </div>

        {/* Scrollable Content overlaying the Hero */}
        <div className="relative z-10 bg-[#FFFAFA] w-full">
          {/* About Me & Education */}
          <About />

          {/* Technical Skills Category Grids */}
          <Skills />
        </div>
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

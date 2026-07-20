import React, { useEffect } from 'react';
import {
  HireModal,
  SuccessToast,
  Hero,
  Features,
  About,
  Skills,
  Experience,
  Projects,
  Contact
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
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('Experience');
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-between pb-0 relative font-sans overflow-x-clip w-full max-w-[100vw]">
      
      {/* Main Content Sections wrapper (No solid bg needed, children cover the footer) */}
      <main className="flex-grow w-full space-y-0 relative z-10 mb-[800px] lg:mb-[500px]">
        
        {/* Hero Section (Sticky/Fixed Background on Desktop) */}
        <div className="w-full bg-[#FFFAFA] sticky top-0 z-0 pt-16 md:pt-24 lg:pt-32 pb-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
            <Hero
              onViewWork={handleViewWork}
              onHireClick={handleHireMe}
            />
          </div>
        </div>

        {/* Scrollable Content overlaying the Hero */}
        <div className="relative w-full shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3.5rem] lg:rounded-t-[5.5rem] bg-white z-10">
          <div className="relative z-[10] bg-white rounded-t-[3.5rem] lg:rounded-t-[5.5rem] overflow-hidden"><About /></div>
          <div className="relative z-[20] bg-white"><Skills /></div>
          <div className="relative z-[30] bg-white"><Experience /></div>
          <div className="relative z-[40] bg-white"><Projects /></div>
        </div>
      </main>

      {/* Fixed Sticky Footer Reveal */}
      <footer className="fixed bottom-0 left-0 w-full h-[800px] lg:h-[500px] z-0">
        <Contact />
      </footer>

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

import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import logoImg from '../../assets/logo.png';

/**
 * Header Component
 * Fixed navigation bar with logo, nav links, and hire button
 * Includes responsive mobile menu toggle
 */
const Header = ({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
  onHireClick,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 md:py-4 bg-white/90 backdrop-blur-md border-b border-slate-200/30 md:bg-transparent md:backdrop-blur-none md:border-b-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full flex items-center justify-between">
        {/* Interactive Brand Logo & Expanding Navigation Menu */}
        <div className="flex items-center bg-transparent md:bg-white/80 md:hover:bg-white md:backdrop-blur-md px-0 md:px-4 py-0 md:py-2 md:rounded-full md:border md:border-slate-200/50 md:shadow-sm transition-all duration-500 md:hover:shadow-md md:hover:border-slate-300/40 group relative">
          {/* Logo */}
          <div className="h-7 flex items-center justify-center cursor-pointer select-none">
            <img src={logoImg} alt="Logo" className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 active:scale-95" />
          </div>

          {/* Desktop Navigation Links (Slide & Expand from behind the logo) */}
          <nav className="hidden md:flex items-center space-x-6 overflow-hidden max-w-0 opacity-0 translate-x-[-12px] transition-all duration-500 ease-out group-hover:max-w-[600px] group-hover:opacity-100 group-hover:translate-x-0 ml-0 group-hover:ml-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`relative font-sans text-sm font-semibold transition-colors py-1 ${
                  activeTab === item ? 'text-[#000080]' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item}
                {activeTab === item && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#000080] rounded-full" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop Action Button / Mobile Hamburger */}
        <div className="flex items-center">
          <button
            onClick={onHireClick}
            className="hidden md:flex items-center space-x-2 bg-[#000080] hover:bg-[#6D8196] text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#000080] hover:bg-slate-100 active:scale-95 rounded-full transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

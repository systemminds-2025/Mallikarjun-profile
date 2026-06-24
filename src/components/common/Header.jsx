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
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
      {/* Interactive Brand Logo & Expanding Navigation Menu */}
      <div className="flex items-center bg-white/80 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/50 shadow-sm transition-all duration-500 hover:shadow-md hover:border-slate-300/40 group relative">
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
                activeTab === item ? 'text-[#090e1a]' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item}
              {activeTab === item && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Desktop Action Button / Mobile Hamburger */}
      <div className="flex items-center">
        <button
          onClick={onHireClick}
          className="hidden md:flex items-center space-x-2 bg-[#090e1a] hover:bg-[#2563eb] text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95"
        >
          <span>Hire Me</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#090e1a] hover:bg-slate-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';

/**
 * MobileMenu Component
 * Dropdown mobile navigation menu
 * Only visible on mobile devices
 */
const MobileMenu = ({
  isOpen,
  activeTab,
  setActiveTab,
  onClose,
  onHireClick,
}) => {
  if (!isOpen) return null;

  const handleItemClick = (item) => {
    setActiveTab(item);
    onClose();
  };

  const handleHireClick = (e) => {
    onClose();
    onHireClick(e);
  };

  return (
    <div className="md:hidden fixed top-[72px] left-6 right-6 bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 z-50 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
      {NAV_ITEMS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => handleItemClick(item)}
          className={`font-sans text-base font-semibold py-2 border-b border-slate-50 last:border-0 ${
            activeTab === item ? 'text-[#2563eb]' : 'text-slate-600'
          }`}
        >
          {item}
        </a>
      ))}
      <button
        onClick={handleHireClick}
        className="w-full flex items-center justify-center space-x-2 bg-[#090e1a] text-white font-sans text-sm font-semibold py-3 rounded-xl"
      >
        <span>Hire Me</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MobileMenu;

import React from 'react';

/**
 * SuccessToast Component
 * Displays success notification after form submission
 */
const SuccessToast = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white rounded-2xl shadow-xl px-5 py-4 flex items-center space-x-3 border border-slate-800 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
        <svg
          className="w-4 h-4"
          fill="none"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="text-left">
        <p className="font-display font-bold text-sm">Message Sent!</p>
        <p className="font-sans text-xs text-slate-400">Thanks for reaching out, I'll be in touch soon.</p>
      </div>
    </div>
  );
};

export default SuccessToast;

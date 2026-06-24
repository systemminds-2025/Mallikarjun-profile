import React from 'react';

/**
 * Footer Component
 * Simple footer with copyright info
 */
const Footer = () => {
  return (
    <footer className="mt-8 py-6 flex flex-col items-center select-none w-full text-slate-400 font-sans text-xs">
      <p>© {new Date().getFullYear()} Mallikarjuna S. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


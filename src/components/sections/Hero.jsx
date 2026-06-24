import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import malliImg from '../../assets/Mallikarjun.png';
import ifocusLogo from '../../assets/trusted/ifocus.png';
import wakinLogo from '../../assets/trusted/wakin.png';
import validprofileLogo from '../../assets/trusted/validprofile.png';
import qwikhireLogo from '../../assets/trusted/qwikhire.png';


/**
 * Hero Section Component
 * Main landing section with profile image, CTA buttons, and floating badges
 */
const Hero = ({ onViewWork, onHireClick }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const fullText = PERSONAL_INFO.titles[titleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(80);

        if (displayedText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // 2s pause at end
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40); // 40ms deleting speed (faster)

        if (displayedText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
          setTypingSpeed(300); // 300ms pause before next
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, typingSpeed]);

  return (
    <main id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-4 items-center flex-grow w-full relative mb-0 pt-0">
      {/* Giant Typography Background Watermark */}
      <div className="absolute top-[-10%] sm:top-[-14%] md:top-[-18%] lg:top-[-22%] left-1/2 -translate-x-1/2 w-max text-[4.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-display font-black text-[#6D8196]/8 leading-none select-none pointer-events-none z-0 tracking-normal uppercase whitespace-nowrap">
        DEVELOPER
      </div>

      {/* Left Column: Content */}
      <div className="lg:col-span-7 flex flex-col items-start space-y-3 md:space-y-4 z-10 text-left pt-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#ADD8E6]/25 border border-[#ADD8E6]/50 rounded-full px-4 py-1.5 transition-all duration-300 hover:shadow-md hover:shadow-cyan-100/50 hover:scale-[1.03]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ADD8E6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D8196]"></span>
          </span>
          <span className="text-[#6D8196] text-[11px] font-extrabold tracking-wider uppercase font-display select-none">
            Hello, I'm
          </span>
        </div>

        {/* Title */}
        <div className="space-y-0.5">
          <h1 className="font-display font-extrabold text-[#000080] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-xl">
            {PERSONAL_INFO.name}
          </h1>
          <div className="h-10 md:h-12 flex items-center">
            <span className="bg-gradient-to-r from-[#000080] to-[#ADD8E6] bg-clip-text text-transparent font-display font-extrabold text-2xl md:text-3xl lg:text-4xl transition-all duration-500">
              {displayedText}
            </span>
            <span className="inline-block w-[3px] h-[0.9em] bg-[#000080] ml-1.5 animate-blink rounded-sm self-center"></span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-base md:text-lg font-sans max-w-xl leading-snug">
          {PERSONAL_INFO.bio}
        </p>


        {/* CTA Buttons Row */}
        <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onViewWork}
            className="flex items-center justify-center space-x-1.5 bg-[#000080] hover:bg-[#6D8196] text-white font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-100 active:scale-98 cursor-pointer flex-1 sm:flex-none"
          >
            <span>View My Work</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          <a
            href="#download-cv"
            onClick={(e) => {
              e.preventDefault();
              alert('CV Download started (mock)');
            }}
            className="flex items-center justify-center space-x-1.5 bg-[#FFFAFA] hover:bg-[#ADD8E6]/10 border border-[#ADD8E6]/50 text-[#000080] font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl transition-all active:scale-98 cursor-pointer flex-1 sm:flex-none"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0" />
          </a>
        </div>


        {/* Trusted By Logos */}
        <div className="w-full">
          <TrustedBySection />
        </div>
      </div>

      {/* Right Column: Visual Elements & Profile Image */}
      <div className="lg:col-span-5 flex items-end justify-center relative w-full self-end mt-8 lg:mt-0 mb-0">
        {/* Background Solid Gradient Circle */}
        <div className="absolute w-[240px] h-[240px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] bg-gradient-to-br from-[#ADD8E6]/40 to-[#FFFAFA]/20 rounded-full border border-blue-100/30 bottom-[5%] left-1/2 -translate-x-1/2 z-0" />

        {/* Circular dashed grids container */}
        <HeroBackgroundGraphic />

        {/* Profile Image */}
        <div className="relative w-[240px] sm:w-[380px] lg:w-[420px] z-10 group transition-all duration-500 hover:scale-[1.02] mb-0">
          <img
            src={malliImg}
            alt={PERSONAL_INFO.name}
            className="w-full h-auto block select-none pointer-events-none"
          />
        </div>

        {/* Floating Badges */}
        <FloatingBadges />
      </div>
    </main>
  );
};

/**
 * TrustedBySection - Displays logos of companies worked with
 */
const TrustedBySection = () => (
  <div className="pt-1 md:pt-1.5 w-full text-center lg:text-left">
    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
      Professional Footprint
    </p>
    <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-x-8 w-full">
      {/* iFocus Logo */}
      <div className="h-5 sm:h-7 opacity-75 hover:opacity-100 transition-opacity flex items-center shrink-0">
        <img 
          src={ifocusLogo} 
          alt="iFocus" 
          className="h-5 sm:h-7 w-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Valid Profile Logo */}
      <div className="h-5 sm:h-7 opacity-75 hover:opacity-100 transition-opacity flex items-center shrink-0">
        <img 
          src={validprofileLogo} 
          alt="Valid Profile" 
          className="h-5 sm:h-7 w-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Qwik Hire Logo */}
      <div className="h-5 sm:h-7 opacity-75 hover:opacity-100 transition-opacity flex items-center shrink-0">
        <img 
          src={qwikhireLogo} 
          alt="Qwik Hire" 
          className="h-5 sm:h-7 w-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Wakin Softwares Logo */}
      <div className="h-5 sm:h-7 opacity-75 hover:opacity-100 transition-opacity flex items-center shrink-0">
        <img 
          src={wakinLogo} 
          alt="Wakin Softwares" 
          className="h-5 sm:h-7 w-auto object-contain mix-blend-multiply"
        />
      </div>
    </div>
  </div>
);

/**
 * HeroBackgroundGraphic - Decorative background with dashed circles
 */
const HeroBackgroundGraphic = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
    <svg
      className="w-[110%] h-[110%] max-w-[650px] opacity-75"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dashed Concentric Circles */}
      <circle cx="250" cy="250" r="160" stroke="#ADD8E6" strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="250" cy="250" r="210" stroke="#ADD8E6" strokeWidth="1" strokeDasharray="4 6" />
      <circle
        cx="250"
        cy="250"
        r="255"
        stroke="#6D8196"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        opacity="0.6"
      />

      {/* Floating Arrow */}
      <g className="animate-float-arrow">
        <g transform="translate(50, 330) scale(0.7) translate(-80, -250)">
          <path
            d="M 60 410 C 30 350, 45 320, 75 315 C 95 310, 105 330, 85 345 C 65 360, 45 340, 60 280 C 70 240, 120 200, 160 215"
            stroke="#000080"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 148 206 L 163 216 L 152 230"
            stroke="#000080"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  </div>
);

/**
 * FloatingBadges - Floating skill badges around the profile image
 */
const FloatingBadges = () => (
  <>
    {/* Badge 1: React logo (Top of the curve) */}
    <div className="absolute left-[20%] sm:left-[24%] lg:left-[15%] top-[5%] sm:top-[8%] lg:top-[12%] z-20 animate-float-1">
      <div className="bg-white border border-slate-100 rounded-xl shadow-md p-1.5 sm:p-2 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-slate-50 flex items-center justify-center">
          <svg
            className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-[#00d8ff] animate-[spin_20s_linear_infinite]"
            viewBox="-11.5 -10.23174 23 20.46348"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
            <g stroke="#00d8ff" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    {/* Badge 2: Code brackets (Middle of the curve, further left) */}
    <div className="absolute left-[5%] sm:left-[8%] lg:left-[-2%] top-[20%] sm:top-[24%] lg:top-[28%] z-20 animate-float-2">
      <div className="bg-white border border-slate-100 rounded-xl shadow-md p-1.5 sm:p-2 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-50/50 flex items-center justify-center text-blue-600">
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-current"
            fill="none"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <line x1="14" y1="4" x2="10" y2="20"></line>
          </svg>
        </div>
      </div>
    </div>

    {/* Badge 3: JavaScript JS (Bottom of the curve) */}
    <div className="absolute left-[12%] sm:left-[15%] lg:left-[5%] top-[38%] sm:top-[42%] lg:top-[45%] z-20 animate-float-3">
      <div className="bg-white border border-slate-100 rounded-xl shadow-md p-1.5 sm:p-2 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-[#f7df1e] flex items-center justify-center text-black font-display font-black text-[10px] sm:text-xs tracking-tighter shadow-inner">
          JS
        </div>
      </div>
    </div>
  </>
);

export default Hero;

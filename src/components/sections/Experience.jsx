import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Building2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE } from '../../utils/constants';

// Import background images
import ifocusBg from '../../assets/Experience/ifocus.png';
import wakinBg from '../../assets/Experience/wakin.png';

const bgImages = [ifocusBg, wakinBg];

/**
 * Experience Section Component
 * Displays professional work experience in an interactive carousel
 * where the cards themselves use custom background images.
 */
const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === EXPERIENCE.length - 1 ? 0 : prev + 1));
    }, 6000); // Slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev === EXPERIENCE.length - 1 ? 0 : prev + 1));
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPERIENCE.length - 1 : prev - 1));
  };

  return (
    <section id="experience" className="relative h-screen overflow-hidden scrollbar-none w-full flex flex-col justify-center bg-slate-50 border-b border-slate-200/50 scroll-reveal">
      
      {/* Animated Background Orbs (Section Level) */}
      <div className="absolute top-1/4 -left-10 md:left-20 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-50 md:opacity-60 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 -right-10 md:right-20 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-50 md:opacity-60 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-1/3 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-50 md:opacity-60 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Giant Typography Watermark */}
      <div className="absolute -bottom-10 -right-4 md:right-10 text-[12rem] md:text-[24rem] font-display font-black text-slate-200/40 leading-none select-none pointer-events-none z-0 transition-all duration-500">
        0{currentIndex + 1}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 shrink-0 mt-8">
          <div className="space-y-1 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Professional Timeline
            </span>
            <h2 className="font-display font-extrabold text-[#090e1a] text-3xl md:text-4xl tracking-tight">
              Work Experience
            </h2>
          </div>
        </div>

        {/* Carousel Sliding Cards Container */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/50 bg-slate-900 group">
          
          <div 
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="w-full flex-shrink-0 relative flex flex-col justify-end min-h-[450px] md:min-h-[500px]">
                
                {/* Image background specific to this card */}
                <img 
                  src={bgImages[index]} 
                  alt={exp.company} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
                />
                
                {/* Dark overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />

                {/* Card Content */}
                <div className="relative z-10 p-6 md:p-10 w-full text-white mt-auto">
                  
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 gap-4 border-b border-white/20 pb-6">
                    <div>
                      <h3 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-tight mb-3 text-shadow-sm">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-200 font-sans text-sm md:text-base">
                        <span className="flex items-center gap-2 font-semibold text-blue-300">
                          <Building2 className="w-4.5 h-4.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4.5 h-4.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shrink-0">
                      <Calendar className="w-4 h-4 text-blue-300" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Details & Tech */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Responsibilities */}
                    <div className="md:col-span-7 space-y-2.5">
                      {exp.responsibilities.map((resp, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-3 text-[14px] md:text-[15px] text-slate-200 leading-relaxed">
                          <ArrowRight className="w-4.5 h-4.5 text-blue-400 mt-0.5 shrink-0" />
                          <span className="text-shadow-sm">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="md:col-span-5 md:border-l md:border-white/20 md:pl-8">
                      <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-slate-400/50"></span>
                        Technologies Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="font-sans text-xs font-semibold px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-slate-200 hover:bg-blue-600/40 hover:border-blue-400/60 hover:text-white transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Optional: Prev/Next overlay controls inside the card for easy clicking */}
          <button onClick={prevExperience} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextExperience} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../../utils/constants';
import seaImg from '../../assets/Education/SEA.png';
import govtImg from '../../assets/Education/Govt.png';
import ScrollReveal from '../common/ScrollReveal';
import AnimatedCounter from '../common/AnimatedCounter';

/**
 * About Section Component
 * Displays About Me bio details alongside Education history in a responsive layout
 */
const About = () => {
  return (
    <section id="about" className="relative z-20 w-full flex flex-col justify-center bg-gradient-to-b from-[#ADD8E6] to-transparent py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: About Me & Quick Stats */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <ScrollReveal animation="slide-left" delay={100}>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6D8196]">
                Get To Know Me
              </span>
              <h2 className="font-display font-extrabold text-[#000080] text-3xl md:text-4xl tracking-tight">
                About Me
              </h2>
            </div>
            
            <div className="space-y-4 font-sans text-slate-600 leading-relaxed text-base mt-4">
              <p>{PERSONAL_INFO.aboutMe}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
            <ScrollReveal animation="scale-up" delay={200}>
              <div className="bg-[#FFFAFA] border border-slate-100 rounded-2xl p-2 sm:p-4 text-center hover:scale-105 transition-transform duration-300 shadow-sm h-full">
                <span className="block font-display font-extrabold text-[#000080] text-2xl md:text-3xl">
                  <AnimatedCounter end={1} />
                </span>
                <span className="font-sans text-xs font-semibold text-[#6D8196] uppercase tracking-wide">
                  Years Exp
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="scale-up" delay={300}>
              <div className="bg-[#FFFAFA] border border-slate-100 rounded-2xl p-2 sm:p-4 text-center hover:scale-105 transition-transform duration-300 shadow-sm h-full">
                <span className="block font-display font-extrabold text-[#000080] text-2xl md:text-3xl">
                  <AnimatedCounter end={4} />
                </span>
                <span className="font-sans text-xs font-semibold text-[#6D8196] uppercase tracking-wide">
                  AI Projects
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={400}>
              <div className="bg-[#FFFAFA] border border-slate-100 rounded-2xl p-2 sm:p-4 text-center hover:scale-105 transition-transform duration-300 shadow-sm h-full">
                <span className="block font-display font-extrabold text-[#000080] text-2xl md:text-3xl">
                  <AnimatedCounter end={25} />
                </span>
                <span className="font-sans text-xs font-semibold text-[#6D8196] uppercase tracking-wide">
                  Tech Skills
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <ScrollReveal animation="slide-right" delay={300}>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6D8196]">
                Academic Path
              </span>
              <h2 className="font-display font-extrabold text-[#000080] text-3xl md:text-4xl tracking-tight">
                Education
              </h2>
            </div>

            <div className="relative border-l-2 border-slate-200/60 pl-6 ml-2 space-y-8 mt-6">
              {EDUCATION.map((edu, index) => {
                // Determine card background image
                const bgImg = edu.institution.includes('SEA') 
                  ? seaImg 
                  : edu.institution.includes('Yadgir') 
                    ? govtImg 
                    : null;

                return (
                  <ScrollReveal key={index} animation="fade-up" delay={500 + (index * 150)}>
                    <div className="relative group">
                      {/* Timeline node icon */}
                      <span className="absolute -left-[35px] top-1.5 w-7 h-7 rounded-full bg-[#FFFAFA] border-2 border-[#000080] flex items-center justify-center text-[#000080] group-hover:bg-[#000080] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </span>

                      {/* Card Container */}
                      <div className="relative overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-[#ADD8E6]/60 rounded-2xl p-5 shadow-lg transition-all duration-300">
                        {/* Background Image specific to this card */}
                        {bgImg && (
                          <img 
                            src={bgImg} 
                            alt="College Background" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 pointer-events-none select-none z-0"
                          />
                        )}
                        
                        {/* Dark overlay to make text pop */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 mix-blend-multiply z-0" />
                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-0" />

                        {/* Card Content */}
                        <div className="relative z-10 text-white">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h3 className="font-display font-extrabold text-white text-lg leading-snug">
                              {edu.degree}
                            </h3>
                            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 self-start sm:self-center shrink-0">
                              <Calendar className="w-3.5 h-3.5 text-[#ADD8E6]" />
                              {edu.period}
                            </span>
                          </div>

                          <p className="font-display font-bold text-slate-200 text-sm mb-2 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-slate-300 shrink-0" />
                            {edu.institution}
                          </p>

                          <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3">
                            {edu.description}
                          </p>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 w-fit">
                            <Award className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Academic Score: <strong className="text-white font-extrabold">{edu.performance}</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;

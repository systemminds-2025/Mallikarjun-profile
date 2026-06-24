import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../../utils/constants';
import seaImg from '../../assets/Education/SEA.png';
import govtImg from '../../assets/Education/Govt.png';

/**
 * About Section Component
 * Displays About Me bio details alongside Education history in a responsive layout
 */
const About = () => {
  return (
    <section id="about" className="relative h-screen overflow-hidden scrollbar-none w-full flex flex-col justify-center bg-white border-y border-slate-100/80 scroll-reveal py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: About Me & Quick Stats */}
        <div className="lg:col-span-6 space-y-4 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Get To Know Me
            </span>
            <h2 className="font-display font-extrabold text-[#090e1a] text-3xl md:text-4xl tracking-tight">
              About Me
            </h2>
          </div>
          
          <div className="space-y-4 font-sans text-slate-600 leading-relaxed text-base">
            <p>{PERSONAL_INFO.aboutMe}</p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <span className="block font-display font-extrabold text-[#090e1a] text-2xl md:text-3xl">
                1+
              </span>
              <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Years Exp
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <span className="block font-display font-extrabold text-[#090e1a] text-2xl md:text-3xl">
                4+
              </span>
              <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wide">
                AI Projects
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300">
              <span className="block font-display font-extrabold text-[#090e1a] text-2xl md:text-3xl">
                25+
              </span>
              <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Tech Skills
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Academic Path
            </span>
            <h2 className="font-display font-extrabold text-[#090e1a] text-3xl md:text-4xl tracking-tight">
              Education
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-100 pl-6 ml-2 space-y-8">
            {EDUCATION.map((edu, index) => {
              // Determine card background image
              const bgImg = edu.institution.includes('SEA') 
                ? seaImg 
                : edu.institution.includes('Yadgir') 
                  ? govtImg 
                  : null;

              return (
                <div key={index} className="relative group">
                  {/* Timeline node icon */}
                  <span className="absolute -left-[35px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </span>

                  {/* Card Container */}
                  <div className="relative overflow-hidden bg-white border border-slate-100 group-hover:border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Background Image Watermark */}
                    {bgImg && (
                      <img 
                        src={bgImg} 
                        alt="College Background" 
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.10] mix-blend-multiply transition-opacity duration-300 pointer-events-none select-none z-0"
                      />
                    )}

                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h3 className="font-display font-extrabold text-slate-800 text-lg leading-snug">
                          {edu.degree}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 self-start sm:self-center shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          {edu.period}
                        </span>
                      </div>

                      <p className="font-display font-bold text-slate-500 text-sm mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                        {edu.institution}
                      </p>

                      <p className="font-sans text-xs text-slate-400 leading-relaxed mb-3">
                        {edu.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 w-fit">
                        <Award className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Academic Score: <strong className="text-slate-700 font-extrabold">{edu.performance}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;

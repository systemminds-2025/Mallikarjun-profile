import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Calendar, MapPin, Info, Users, Globe, Landmark, Sparkles, List, MonitorPlay,
  Bot, Database, AudioLines, Code2, Cloud, Mail
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import { EXPERIENCE } from '../../utils/constants';
import ifocusLogo from '../../assets/trusted/ifocus.png';
import wakinLogo from '../../assets/trusted/wakin.png';
import qwikhireatsImg from '../../assets/Experience/qwikhireats.png';
import interviewmitraImg from '../../assets/Experience/interviewmitra.png';

const COMPANY_DETAILS = {
  'iFocus Systec Pvt. Ltd.': {
    sector: 'AI & Automation Partner',
    about: 'iFocus Systec is an AI-powered, automation-first technology company helping enterprises modernize products, platforms, and operations across engineering, quality, data, cloud, ERP, and intelligent transformation. We combine strong execution with practical innovation to turn ambitious business goals into scalable digital outcomes. We are a delivery-focused partner for organizations that want more than generic technology services.',
    employmentType: 'Full-time',
    roleSummary: 'Designing and developing AI-powered recruitment systems, automation platforms, and speech-to-text integration using LLMs, Flask, and Spring Boot.',
    projects: [
      {
        title: 'QwikHire ATS',
        description: 'An end-to-end AI-powered recruitment platform that automates candidate screening with 98% accuracy and makes hiring 80% faster. Built with custom intelligent hiring workflows covering AI phone screening, English proficiency assessment, automated coding/video interviews, and integration connectors. It acts as an automated recruiter, running the heavy lifting from sourcing to final human review, trusted by startups and enterprises alike.',
        techStack: ['Java', 'Python', 'React JS', 'Node JS', 'MySQL', 'MongoDB', 'GCP', 'Jenkins', 'Redis', 'GCS Fuse'],
        image: qwikhireatsImg,
        url: 'https://qwikhire.ai'
      }
    ],
    socials: {
      website: 'https://www.ifocussystec.com',
      linkedin: 'https://www.linkedin.com/company/ifocus-systec-pvt-ltd/',
      instagram: 'https://www.instagram.com/ifocussystec/',
      mail: 'mailto:info@ifocussystec.com'
    }
  },
  'Wakin Softwares': {
    sector: 'Software Development',
    about: 'Wakin Softwares Bharat Pvt Ltd is committed to digital excellence, combining cutting-edge technology with industry expertise. We deliver integrated solutions that seamlessly harmonize services and products to help clients transform their business operations and achieve long-term success.',
    employmentType: 'Full-time',
    roleSummary: 'Contributed to building enterprise web systems, implementing responsive React.js frontends, and designing Spring Boot RESTful APIs with Hibernate.',
    projects: [
      {
        title: 'InterviewMitra',
        description: 'An AI-powered interview preparation partner that recreates real-world interview conditions. Designed to help candidates practice with purpose through real-time speech-to-text transcription, dynamic situational questions, AI feedback, and concept-level scoring dashboards to build confidence and measurable growth.',
        techStack: ['Java', 'React JS', 'MUI', 'Python', 'PostgreSQL', 'Cloudjify'],
        image: interviewmitraImg,
        url: 'https://interviewmitra.in'
      }
    ],
    socials: {
      website: 'https://wakinsoftwares.com',
      linkedin: 'https://www.linkedin.com/company/wakinsoftwares-bharat-pvt-ltd/',
      instagram: 'https://www.instagram.com/wakinsoft/',
      mail: 'mailto:info@wakinsoftwares.com'
    }
  }
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const getCompanyLogo = (company) => {
    if (company.includes('iFocus')) return ifocusLogo;
    if (company.includes('Wakin')) return wakinLogo;
    return null;
  };

  const getTechIcon = (techName) => {
    const map = {
      'Java': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      'Python': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      'React.js': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      'React JS': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      'MUI': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
      'PostgreSQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      'Cloudjify': { icon: Cloud, color: '#0ea5e9' },
      'Spring Boot': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      'SQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      'MySQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      'MongoDB': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      'GCP': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      'GCS Fuse': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      'Jenkins': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
      'Redis': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      'Node JS': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      'Node.js': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      'Flask': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
      'LLMs': { icon: Bot, color: '#2563eb' },
      'Whisper': { icon: AudioLines, color: '#f97316' },
    };
    return map[techName] || { icon: Code2, color: '#64748b' };
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container || window.innerWidth < 1024) return;
      const rect = container.getBoundingClientRect();
      const scrolledDistance = -rect.top;
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      
      if (scrolledDistance < 0 || scrollableDistance <= 0) {
        return;
      }

      const progress = scrolledDistance / scrollableDistance;
      
      // Delay transition: transition to Wakin only after scrolling past 65% of the range
      let index = 0;
      if (progress >= 0.65) {
        index = 1;
      }

      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const renderContent = (job, idx, isStickyView = false) => {
    const logo = getCompanyLogo(job.company);
    const details = COMPANY_DETAILS[job.company] || COMPANY_DETAILS['Wakin Softwares'];

    return (
      <div className="w-full max-w-[85rem] mx-auto px-0 lg:px-10 xl:px-16 flex flex-col gap-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
        {/* LEFT COLUMN: Company Details */}
        <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
          {logo ? (
            <div className="w-44 h-16 flex items-center justify-start shrink-0 overflow-hidden mb-3">
              <img 
                src={logo} 
                alt={`${job.company} logo`} 
                className="h-full object-contain object-left" 
              />
            </div>
          ) : (
            <h3 className="font-display font-black text-slate-850 text-3xl lg:text-4xl leading-tight mb-2">
              {job.company}
            </h3>
          )}

          <div className="flex flex-wrap items-center gap-2.5 text-slate-500 text-sm font-semibold mt-1.5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-[#6D8196]" />
              <span>{job.location}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-5 h-5 text-[#6D8196]" />
              <span>{job.period}</span>
            </div>
          </div>

          <span className="mt-2 text-sm font-bold text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded">
            {details.sector}
          </span>

          <div className="hidden lg:block w-full h-px bg-slate-200/60 my-3" />

          <div className="hidden lg:flex items-center gap-1.5 text-slate-850 font-display font-extrabold text-sm tracking-wider uppercase mb-1">
            <Info className="w-5 h-5 text-blue-600" />
            <span>About the Company</span>
          </div>
          <p className="hidden lg:block font-sans text-base text-slate-500 leading-relaxed max-w-md">
            {details.about}
          </p>

          {/* Social Icons row placed after about company description */}
          <div className="hidden lg:flex items-center gap-3 mt-4">
            {details.socials?.website && (
              <a 
                href={details.socials.website} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md bg-slate-50 border border-slate-200 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-colors"
                title="Company Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {details.socials?.linkedin && (
              <a 
                href={details.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md bg-slate-50 border border-slate-200 hover:bg-blue-50 text-slate-500 hover:text-[#0077b5] transition-colors"
                title="Company LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {details.socials?.instagram && (
              <a 
                href={details.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-md bg-slate-50 border border-slate-200 hover:bg-blue-50 text-slate-500 hover:text-[#e1306c] transition-colors flex items-center justify-center"
                title="Company Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            )}
            {details.socials?.mail && (
              <a 
                href={details.socials.mail} 
                className="p-2 rounded-md bg-slate-50 border border-slate-200 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-colors"
                title="Company Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Roles and Responsibilities */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:border-l lg:border-slate-200/50 lg:pl-10 w-full mt-6 lg:mt-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-bold text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded tracking-wider uppercase">
              My Role
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-650 bg-slate-100/90 px-3 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {details.employmentType}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-slate-800 text-3xl lg:text-4xl mt-1.5 tracking-tight">
            {job.role}
          </h3>

          <p className="hidden lg:block font-sans text-base text-slate-500 mt-1 leading-relaxed">
            {details.roleSummary}
          </p>

          <div className="w-full mt-6 bg-transparent">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-150 w-full mb-3">
              <MonitorPlay className="w-5 h-5 text-blue-600" />
              <h4 className="font-display font-extrabold text-slate-800 text-sm lg:text-base uppercase tracking-wider">
                My Work
              </h4>
            </div>

            <div className="w-full">
              {details.projects.map((proj, pIdx) => (
                <div key={pIdx} className="flex flex-col gap-4 bg-transparent hover:translate-x-1 transition-transform duration-300 w-full">
                  {/* Title & Link */}
                  <h5 className="font-display font-extrabold text-slate-850 text-lg lg:text-xl leading-tight">
                    <a href={proj.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                      {proj.title}
                    </a>
                  </h5>
                  
                  {/* Image & Description Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                    <a 
                      href={proj.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="sm:col-span-5 w-full rounded-xl overflow-hidden border border-slate-200/50 shadow-sm bg-white aspect-video flex items-center justify-center group/img"
                    >
                      <img 
                        src={proj.image} 
                        alt={`${proj.title} Screenshot`} 
                        className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover/img:scale-[1.02]" 
                      />
                    </a>
                    
                    <p className="sm:col-span-7 font-sans text-sm text-slate-500 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  
                  {/* Tech icons row shown below both image and description */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100/50">
                    {proj.techStack.map((tech, tIdx) => {
                      const iconObj = getTechIcon(tech);
                      return (
                        <div key={tIdx} className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200" title={tech}>
                          {iconObj.url ? (
                            <img src={iconObj.url} alt={tech} className="w-full h-full object-contain" />
                          ) : (
                            <iconObj.icon className="w-full h-full" style={{ color: iconObj.color }} strokeWidth={2} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="w-full bg-white relative h-auto lg:h-[300vh]"
    >
      {/* 1. DESKTOP VIEW: Scroll Synced Sticky Slide Deck */}
      <div className="hidden lg:flex relative sticky top-0 w-full h-[100dvh] overflow-hidden flex-col">
        
        {/* Desktop Fixed Header */}
        <div className="w-full pt-8 xl:pt-12 pb-4 text-center z-50 px-4 shrink-0 pointer-events-none relative">
          <ScrollReveal animation="zoom-in">
            <h2 className="font-display font-black text-[#000080] text-4xl lg:text-5xl tracking-tight drop-shadow-sm">
              Professional Experience
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Background Blobs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ADD8E6]/10 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#6D8196]/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        {/* Card slider display port */}
        <div className="relative flex-grow w-full max-w-7xl mx-auto z-10 pb-6">
          {EXPERIENCE.map((job, idx) => {
            const isActive = activeIndex === idx;
            const isPast = idx < activeIndex;
            const isFuture = idx > activeIndex;

            let stateClass = 'translate-y-0 opacity-100 scale-100 pointer-events-auto z-20';
            if (isPast) {
              stateClass = '-translate-y-16 opacity-0 scale-95 pointer-events-none z-0';
            } else if (isFuture) {
              stateClass = 'translate-y-16 opacity-0 scale-95 pointer-events-none z-0';
            }

            return (
              <div
                key={idx}
                className={`transition-all duration-[800ms] ease-in-out absolute inset-0 w-full h-full flex items-center justify-center pb-8 ${stateClass}`}
              >
                {renderContent(job, idx, true)}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. MOBILE / TABLET VIEW: Stacked Sticky Cards */}
      <div className="lg:hidden w-full px-4 sm:px-6 pt-10 pb-16 space-y-6 relative">
        
        {/* Mobile Header */}
        <div className="w-full text-center mb-8">
          <ScrollReveal animation="zoom-in">
            <h2 className="font-display font-black text-[#000080] text-3xl tracking-tight drop-shadow-sm">
              Professional Experience
            </h2>
          </ScrollReveal>
        </div>

        {/* Stacked Cards Container */}
        <div className="space-y-8 max-w-2xl mx-auto text-left relative">
          {EXPERIENCE.map((job, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] w-full"
            >
              {renderContent(job, idx, false)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

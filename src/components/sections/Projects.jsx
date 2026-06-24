import React, { useState } from 'react';
import { ExternalLink, GitBranch, Terminal, Sparkles, Layers, Mic, ChevronDown, Leaf, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';
import qwikHireImg from '../../assets/qwik_hire.png';
import kareerGrowthImg from '../../assets/kareer_growth.png';
import interviewMitraImg from '../../assets/interview_mitra.png';
import validProfileImg from '../../assets/valid_profile.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI & NLP', 'Full Stack'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & NLP') {
      return project.category.includes('AI') || project.category.includes('Language') || project.category.includes('Speech');
    }
    if (activeFilter === 'Full Stack') {
      return project.category.includes('Full Stack');
    }
    return true;
  });

  const getBadgeStyle = (category) => {
    switch (category) {
      case 'AI / Full Stack':
        return { bg: 'bg-[#b088f9]', text: 'text-white', icon: <Sparkles className="w-3.5 h-3.5" /> };
      case 'Natural Language Processing':
        return { bg: 'bg-[#e0f2fe]', text: 'text-[#0284c7]', icon: <Layers className="w-3.5 h-3.5" /> };
      case 'Speech & AI':
        return { bg: 'bg-[#e89cd1]', text: 'text-white', icon: <Mic className="w-3.5 h-3.5" /> };
      case 'Full Stack':
        return { bg: 'bg-[#e0f2fe]', text: 'text-[#0284c7]', icon: <Layers className="w-3.5 h-3.5" /> };
      default:
        return { bg: 'bg-slate-100', text: 'text-slate-600', icon: <Layers className="w-3.5 h-3.5" /> };
    }
  };

  const getCardBg = (category) => {
    switch (category) {
      case 'AI / Full Stack': return 'bg-gradient-to-br from-[#ffffff] via-[#f9f8ff] to-[#ebe5ff]';
      case 'Natural Language Processing': return 'bg-gradient-to-br from-[#ffffff] via-[#f4faff] to-[#e6f4ff]';
      case 'Speech & AI': return 'bg-gradient-to-br from-[#ffffff] via-[#fff5fb] to-[#fae6fa]';
      case 'Full Stack': return 'bg-gradient-to-br from-[#ffffff] via-[#f4fdf8] to-[#e0f8ff]';
      default: return 'bg-white';
    }
  };

  const getImage = (title) => {
    switch (title) {
      case 'QwikHire ATS': return qwikHireImg;
      case 'KareerGrowth': return kareerGrowthImg;
      case 'InterviewMitra': return interviewMitraImg;
      case 'ValidProfile': return validProfileImg;
      default: return null;
    }
  };

  return (
    <section id="projects" className="sticky top-0 h-screen overflow-hidden scrollbar-none z-[20] w-full flex flex-col justify-center bg-[#fafcfd] border-b border-slate-200/50 scroll-reveal py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
          <div className="space-y-3 text-left max-w-3xl">
            <h4 className="text-blue-600 font-bold tracking-wider text-xs uppercase">
              MY CREATIVE PORTFOLIO
            </h4>
            <h2 className="font-display font-extrabold text-[#090e1a] text-4xl md:text-5xl tracking-tight">
              Featured Projects
            </h2>
            <p className="font-sans text-lg text-slate-500 leading-relaxed">
              A showcase of AI engines, full stack applications, and language model integrations I've built.
            </p>
          </div>

          {/* Filters Tabs */}
          <div className="flex items-center gap-1 bg-white border border-slate-100 p-1.5 rounded-full w-fit self-start md:self-end shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-1 font-sans text-sm font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filter} {filter === 'Full Stack' && <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {filteredProjects.map((project, index) => {
            const badgeStyle = getBadgeStyle(project.category);
            return (
              <div
                key={index}
                className={`rounded-[1.5rem] border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row p-6 lg:p-7 min-h-[300px] ${getCardBg(project.category)}`}
              >
                {/* Content Left */}
                <div className="w-full md:w-[60%] z-10 flex flex-col justify-between h-full relative text-left">
                  <div>
                    {/* Badge */}
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-5 ${badgeStyle.bg} ${badgeStyle.text}`}>
                      {badgeStyle.icon}
                      {project.category}
                    </span>
                    
                    {/* Project Title */}
                    <h3 className="font-display font-extrabold text-[#090e1a] text-2xl mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="font-sans text-sm text-slate-500 leading-relaxed pr-6 md:pr-10 mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="flex items-center gap-1 font-sans text-[11px] font-bold px-3 py-1.5 rounded-lg bg-slate-100/60 text-slate-600 border border-slate-200/50 shadow-sm"
                      >
                        {tech === 'TensorFlow' && <Cpu className="w-3.5 h-3.5 text-orange-500" />}
                        {tech === 'Node.js' && <Leaf className="w-3.5 h-3.5 text-green-500" />}
                        {tech === 'MongoDB' && <Database className="w-3.5 h-3.5 text-green-600" />}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Right */}
                <div className="hidden md:block absolute right-[-2%] top-1/2 -translate-y-1/2 w-[48%] h-[100%] pointer-events-none">
                  <img 
                    src={getImage(project.title)} 
                    alt={project.title} 
                    className="w-full h-full object-contain mix-blend-multiply opacity-95" 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;


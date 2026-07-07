import React, { useRef, useState, useEffect } from 'react';
import {
  Code2, Database, Cpu, Wrench, Globe, Terminal, Server, Layers,
  MessageSquare, Video, Mail, Calendar, Bot, AudioLines, Mic, Zap,
  MousePointer2, Radio, Sparkles, TestTube2, Key, Bell, Briefcase,
  FileJson, Cloud, Package
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import { SKILLS } from '../../utils/constants';

const getIconData = (skillName) => {
  const iconMap = {
    'Postman': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    'Notion': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },
    'Framer': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg' },
    'Jira': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    'ChatGPT': { url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    'Google Meet': { icon: Video, color: '#1a73e8' },
    'Zoho Mail': { icon: Mail, color: '#0052cc' },
    'Google Calendar': { icon: Calendar, color: '#1a73e8' },
    'Slack': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg' },
    'Figma': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    'Git': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    'GitHub': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    'Vite': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    'LinkedIn': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg' },
    'npm': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
    'pnpm': { icon: Package, color: '#f69220' },
    'Babel': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg' },
    'JUnit': { icon: TestTube2, color: '#25a162' },
    'Naukri': { icon: Briefcase, color: '#0078db' },
    'Google Alerts': { icon: Bell, color: '#fbbc04' },
    'React JS': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    'HTML5': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    'CSS3': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    'Tailwind CSS': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    'Bootstrap': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    'JavaScript': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    'TypeScript': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    'Redux': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    'Sass': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
    'Node JS': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    'Java': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    'Spring Boot': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    'Spring Security': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    'Spring Cloud': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    'Spring MVC': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    'Python': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    'REST API': { icon: Globe, color: '#6366f1' },
    'RESTful APIs': { icon: Globe, color: '#6366f1' },
    'WebSockets': { icon: Radio, color: '#3b82f6' },
    'JPA': { icon: Database, color: '#475569' },
    'Hibernate': { url: 'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg' },
    'JSON': { icon: FileJson, color: '#334155' },
    'JWT': { icon: Key, color: '#ec4899' },
    'MySQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    'PostgreSQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    'MongoDB': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    'Redis': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    'SQL': { icon: Database, color: '#2563eb' },
    'Docker': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    'Kubernetes': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
    'Google GCP': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
    'Linux': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    'Render': { icon: Cloud, color: '#1e293b' },
    'Vercel': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    'Netlify': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
    'Claude AI': { url: 'https://icon.horse/icon/anthropic.com' },
    'OpenAI': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
    'Gemini AI': { url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    'AssemblyAI': { url: 'https://icon.horse/icon/assemblyai.com' },
    'Deepgram': { url: 'https://icon.horse/icon/deepgram.com' },
    'Groq': { url: 'https://icon.horse/icon/groq.com' },
  };
  return iconMap[skillName] || { icon: Code2, color: '#94a3b8' };
};

const SPOKE_COLORS = [
  '#f97316', // orange
  '#3b82f6', // blue
  '#22c55e', // green
  '#ec4899', // pink
  '#eab308', // yellow
  '#a855f7', // purple
  '#06b6d4', // cyan
  '#ef4444', // red
];

const CategoryBlock = ({ category, index, activeIndex }) => {
  const [sizes, setSizes] = useState({ radius: 190, innerGap: 100, outerGap: 20 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0);

  // Responsive geometry for the mind-map spokes and gaps
  useEffect(() => {
    const updateSizes = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;

      setSizes({
        radius: isMobile ? 110 : isTablet ? 150 : 190,
        innerGap: isMobile ? 65 : 100, // Distance from absolute center to start of line (Hub Radius + Gap)
        outerGap: isMobile ? 15 : 25   // Gap offset from the outer icon
      });
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const isLeft = index % 2 === 0;
  const numSkills = category.items.length;

  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  const isFuture = index > activeIndex;

  let stateClass = 'translate-y-0 scale-100 opacity-100 pointer-events-auto z-40';
  if (isPast) {
    stateClass = '-translate-y-32 scale-90 opacity-0 pointer-events-none z-0';
  } else if (isFuture) {
    stateClass = 'translate-y-32 scale-90 opacity-0 pointer-events-none z-0';
  }

  // Auto-cycle the skill display
  useEffect(() => {
    if (!isActive || hoveredSkill) return;

    const timer = setInterval(() => {
      setAutoIndex(prev => (prev + 1) % numSkills);
    }, 2000);

    return () => clearInterval(timer);
  }, [isActive, hoveredSkill, numSkills]);

  const displaySkill = hoveredSkill || category.items[autoIndex];

  return (
    <div
      className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${stateClass}`}
    >
      {/* Auto-Cycle Animation Styles */}
      <style>
        {`
         @keyframes fadeInContent {
           from { opacity: 0; transform: translateY(15px); }
           to { opacity: 1; transform: translateY(0); }
         }
         .animate-fade-content {
           animation: fadeInContent 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
         }
       `}
      </style>

      <div className={`relative flex items-center justify-center w-full h-full max-w-7xl mx-auto ${isLeft ? 'md:pr-[40%]' : 'md:pl-[40%]'}`}>

        {/* Central Hub & Spokes */}
        <div className="relative z-10 flex items-center justify-center -translate-y-4 md:-translate-y-8">

          {/* Spoke Lines */}
          {category.items.map((skill, i) => {
            const angleRad = (i / numSkills) * 2 * Math.PI - Math.PI / 2;
            const angleDeg = angleRad * (180 / Math.PI);
            const color = SPOKE_COLORS[i % SPOKE_COLORS.length];

            const lineWidth = sizes.radius - sizes.innerGap - sizes.outerGap;

            return (
              <div
                key={`line-${i}`}
                className="absolute top-1/2 left-1/2 origin-left z-0"
                style={{
                  width: `${Math.max(0, lineWidth)}px`,
                  height: '1px',
                  backgroundColor: color,
                  transform: `translateY(-50%) rotate(${angleDeg}deg) translateX(${sizes.innerGap}px)`
                }}
              />
            );
          })}

          {/* Central Big Circle (The Hub) */}
          <div className={`w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#ADD8E6]/40 to-[#FFFAFA]/30 text-[#000080] flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-[4px] md:border-8 border-[#FFFAFA] z-20 relative`}>
            <h3 className="text-base md:text-xl font-black text-center leading-tight font-display px-2">
              {category.category}
            </h3>
          </div>

          {/* Small Skill Nodes (The Spokes) */}
          {category.items.map((skill, i) => {
            const angle = (i / numSkills) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * sizes.radius;
            const y = Math.sin(angle) * sizes.radius;
            const color = SPOKE_COLORS[i % SPOKE_COLORS.length];
            const iconData = getIconData(skill.name);
            const IconComponent = iconData.icon;

            return (
              <div
                key={`node-${i}`}
                className="absolute top-1/2 left-1/2 w-0 h-0 z-30 flex items-center justify-center cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Pure Floating Icon */}
                <div className="absolute w-8 h-8 md:w-12 md:h-12 flex items-center justify-center hover:scale-125 transition-transform drop-shadow-md">
                  {iconData.url ? (
                    <img src={iconData.url} alt={skill.name} className="w-full h-full object-contain" />
                  ) : (
                    <IconComponent className={`w-full h-full`} style={{ color: color }} strokeWidth={1.5} />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Content (Hero Style, Perfectly centered in empty space) */}
        <div
          className={`z-50 pointer-events-none 
                fixed bottom-4 left-1/2 -translate-x-1/2 w-[90vw] 
                md:absolute md:top-1/2 md:-translate-y-1/2 md:-mt-8 md:bottom-auto md:translate-x-0 md:w-[40%] md:flex md:items-center md:justify-center
                ${isLeft ? 'md:right-0 md:left-auto' : 'md:left-0 md:right-auto'} 
              `}
        >
          <div
            key={displaySkill?.name}
            className={`w-full md:w-[85%] xl:w-[75%] animate-fade-content opacity-0`}
          >
            {displaySkill && (
              <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6 md:gap-10`}>

                {/* Typography & Bullets */}
                <div className={`flex-1 ${isLeft ? 'text-left' : 'text-left md:text-right'}`}>
                  <h4 className="text-4xl md:text-5xl font-black font-display text-slate-800 leading-tight mb-2 drop-shadow-sm">
                    {displaySkill.name}
                  </h4>

                  <ul className={`space-y-2 md:space-y-3 ${isLeft ? '' : 'flex flex-col md:items-end'}`}>
                    {displaySkill.subSkills?.map((sub, idx) => (
                      <li key={idx} className={`flex items-center gap-3 text-slate-600 text-lg md:text-xl font-medium ${isLeft ? '' : 'flex-row-reverse'}`}>
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 shrink-0 shadow-sm"></div>
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Massive Floating Icon */}
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0 flex items-center justify-center opacity-90 drop-shadow-2xl">
                  {(() => {
                    const iData = getIconData(displaySkill.name);
                    const IComp = iData.icon;
                    return iData.url ? (
                      <img src={iData.url} alt={displaySkill.name} className="w-full h-full object-contain" />
                    ) : (
                      <IComp className="w-full h-full" style={{ color: iData.color }} strokeWidth={1.5} />
                    );
                  })()}
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const mobileScrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const sectionTop = container.offsetTop;
      const sectionHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - windowHeight;
      const scrolledDistance = window.scrollY - sectionTop;

      if (scrolledDistance < 0) {
        setActiveIndex(0);
        return;
      }

      if (scrolledDistance > scrollableDistance) {
        setActiveIndex(SKILLS.length - 1);
        return;
      }

      const progress = scrolledDistance / scrollableDistance;

      let index = 0;
      if (progress < 0.45) {
        index = 0;
      } else if (progress < 0.65) {
        index = 1;
      } else if (progress < 0.80) {
        index = 2;
      } else if (progress < 0.90) {
        index = 3;
      } else {
        index = 4;
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

  // Auto-scroll loop for mobile view category cards
  useEffect(() => {
    const checkViewport = () => window.innerWidth < 768;
    if (!checkViewport()) return;

    const interval = setInterval(() => {
      const container = mobileScrollRef.current;
      if (!container) return;

      setMobileActiveIndex((prev) => {
        const nextIndex = (prev + 1) % SKILLS.length;
        // Width of a card (85vw) + Gap (20px)
        const cardWidth = container.scrollWidth / SKILLS.length;
        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="w-full bg-white relative h-auto md:h-[650vh]"
    >

      {/* Sticky Viewport on Desktop, normal flow on Mobile */}
      <div className="relative md:sticky md:top-0 w-full md:h-[100dvh] md:overflow-hidden flex flex-col">

        {/* Section Header */}
        <ScrollReveal animation="zoom-in">
          <div className="pt-10 md:pt-16 pb-4 md:pb-6 text-center z-50 w-full px-4 shrink-0">
            <h2 className="font-display font-black text-[#000080] text-3xl md:text-5xl tracking-tight drop-shadow-sm">
              Tools & Technologies
            </h2>
            <p className="font-sans text-sm md:text-base text-[#6D8196] max-w-4xl mx-auto mt-2 md:mt-3 drop-shadow-sm">
              Scroll down to explore my complete ecosystem and technical proficiencies categorized by domain.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop View: Interactive Spoke Wheel Mind-Map */}
        <div className="hidden md:block flex-1 relative w-full mb-10">
          {SKILLS.map((category, index) => (
            <CategoryBlock
              key={index}
              category={category}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* Mobile View: Responsive Category Cards - sliding side-by-side with animated dots */}
        <div className="block md:hidden w-full mt-4 pb-16">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 px-6 pb-6"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const cardWidth = e.currentTarget.scrollWidth / SKILLS.length;
              const newIndex = Math.round(scrollLeft / cardWidth);
              if (newIndex >= 0 && newIndex < SKILLS.length) {
                setMobileActiveIndex(newIndex);
              }
            }}
          >
            {SKILLS.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="w-[85vw] snap-center bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-3 hover:shadow-md transition-all duration-300 shrink-0"
              >
                <h3 className="font-display font-extrabold text-[#000080] text-base border-b border-slate-100 pb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-[#ADD8E6]"></span>
                  {cat.category}
                </h3>
                <div className="space-y-2.5">
                  {cat.items.map((skill, skillIdx) => {
                    const iconData = getIconData(skill.name);
                    const IconComponent = iconData.icon;
                    const color = SPOKE_COLORS[skillIdx % SPOKE_COLORS.length];

                    return (
                      <div key={skillIdx} className="space-y-1 pb-1.5 border-b border-slate-50 last:border-0 last:pb-0">
                        {/* Skill Header */}
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 flex items-center justify-center shrink-0">
                            {iconData.url ? (
                              <img src={iconData.url} alt={skill.name} className="w-full h-full object-contain" />
                            ) : (
                              <IconComponent className="w-3.5 h-3.5" style={{ color: color }} strokeWidth={2} />
                            )}
                          </div>
                          <span className="font-display font-bold text-slate-800 text-xs sm:text-sm">{skill.name}</span>
                        </div>

                        {/* Subskills List as Mini Tags */}
                        {skill.subSkills && skill.subSkills.length > 0 && (
                          <div className="flex flex-wrap gap-1 pl-6">
                            {skill.subSkills.map((sub, subIdx) => (
                              <span
                                key={subIdx}
                                className="font-sans text-[9px] font-semibold text-slate-500 bg-[#ADD8E6]/10 border border-[#ADD8E6]/20 px-1.5 py-0.5 rounded"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Slider Dots Indicator */}
          <div className="flex justify-center gap-2 mt-2">
            {SKILLS.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-300 ${mobileActiveIndex === dotIdx ? 'w-6 bg-[#000080]' : 'w-1.5 bg-[#000080]/30'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

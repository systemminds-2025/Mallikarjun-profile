import React from 'react';
import { Mail, MapPin, ArrowRight, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

// Brand icon components
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.096C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.567C1.576 4.34 0.774 5.14 0.502 6.163 0 8.01 0 12 0 12s0 3.99.502 5.837c.272 1.022 1.074 1.824 2.096 2.096C4.442 20.5 12 20.5 12 20.5s7.558 0 9.402-.567c1.022-.272 1.824-1.074 2.096-2.096.502-1.847.502-5.837.502-5.837s0-3.99-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

/**
 * Contact Section Component
 * Displays quick contact info, large stylized social channel links, and a message form
 */
const Contact = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <section id="contact" className="sticky top-0 h-screen overflow-hidden scrollbar-none z-[30] w-full flex flex-col justify-center bg-[#090e1a] text-white border-t border-slate-900 scroll-reveal py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Direct Info & Social Cards */}
        <div className="space-y-6 text-left flex flex-col">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight">
              Let's Connect
            </h2>
            <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
              I am open to new job opportunities, freelance collaborations, or discussing AI-driven product solutions.
            </p>
          </div>

          {/* Quick Info Items */}
          <div className="space-y-4 pt-2">
            {/* Location Card */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider">Location</span>
                <span className="font-sans text-sm font-bold text-slate-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Email Card */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center gap-4 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-2xl p-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <span className="block font-sans text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Address</span>
                <span className="font-sans text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{PERSONAL_INFO.email}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Large Social Channels Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-2xl p-4 transition-all flex flex-row items-center gap-4 group"
            >
              <LinkedInIcon className="w-6 h-6 text-blue-400" />
              <div>
                <span className="block font-display font-extrabold text-sm text-white">LinkedIn</span>
                <span className="font-sans text-[10px] text-slate-400">@mallikarjuna2002</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-slate-400 hover:bg-white/10 rounded-2xl p-4 transition-all flex flex-row items-center gap-4 group"
            >
              <GitHubIcon className="w-6 h-6 text-slate-200" />
              <div>
                <span className="block font-display font-extrabold text-sm text-white">GitHub</span>
                <span className="font-sans text-[10px] text-slate-400">@mallikarjunadanduba</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/10 rounded-2xl p-4 transition-all flex flex-row items-center gap-4 group"
            >
              <InstagramIcon className="w-6 h-6 text-rose-400" />
              <div>
                <span className="block font-display font-extrabold text-sm text-white">Instagram</span>
                <span className="font-sans text-[10px] text-slate-400">@mallikarjun_danduba</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 rounded-2xl p-4 transition-all flex flex-row items-center gap-4 group"
            >
              <YouTubeIcon className="w-6 h-6 text-red-400" />
              <div>
                <span className="block font-display font-extrabold text-sm text-white">YouTube</span>
                <span className="font-sans text-[10px] text-slate-400">@mallikarjundanduba</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="text-left h-full">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-sm h-full flex flex-col">
            <h3 className="font-display font-extrabold text-white text-xl mb-2">
              Send a Direct Message
            </h3>
            <p className="font-sans text-slate-400 text-sm mb-6">
              Drop me a note below and I will get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 font-sans text-sm text-white focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 font-sans text-sm text-white focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 font-sans text-sm text-white focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="flex flex-col flex-grow min-h-[120px]">
                <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Message Body
                </label>
                <textarea
                  required
                  placeholder="Explain details of your project, opportunity, or question..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 font-sans text-sm text-white focus:ring-1 focus:ring-blue-500/20 resize-none transition-all placeholder:text-slate-600 flex-grow"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
              >
                <span>Send message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer / Copyright */}
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col items-center select-none w-full text-slate-400 font-sans text-xs">
        <p>© {new Date().getFullYear()} Mallikarjuna S. All rights reserved.</p>
      </div>
    </div>
  </section>
  );
};

export default Contact;

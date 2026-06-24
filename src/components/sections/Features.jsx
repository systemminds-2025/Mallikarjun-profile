import React from 'react';
import { Zap, Shield, Smartphone, User } from 'lucide-react';
import { FEATURES } from '../../utils/constants';

/**
 * Features Section Component
 * Displays feature cards with icons and descriptions
 */
const Features = () => {
  const iconMap = {
    zap: Zap,
    shield: Shield,
    smartphone: Smartphone,
    user: User,
  };

  return (
    <section className="relative w-full z-30 mt-4 md:mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:bg-white/80 lg:backdrop-blur-xl lg:border lg:border-slate-200/60 lg:rounded-[2rem] lg:p-8 lg:shadow-xl lg:shadow-slate-200/50 lg:divide-x lg:divide-slate-300 transition-all duration-300 hover:lg:shadow-2xl hover:lg:shadow-slate-200/60">
        {FEATURES.map((feature, index) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <FeatureCard
              key={feature.id}
              icon={IconComponent}
              title={feature.title}
              description={feature.description}
              isFirst={index === 0}
              isLast={index === FEATURES.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};

/**
 * Individual FeatureCard component
 */
const FeatureCard = ({ icon: Icon, title, description, isFirst, isLast }) => (
  <div
    className={`group bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all lg:bg-transparent lg:border-none lg:rounded-none lg:p-0 lg:shadow-none lg:hover:shadow-none flex items-start space-x-4 lg:px-6 lg:hover:-translate-y-0.5 ${
      isFirst ? 'lg:pl-0' : ''
    } ${isLast ? 'lg:pr-0' : ''}`}
  >
    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
      <Icon className="w-5 h-5 fill-current transition-colors duration-300" />
    </div>
    <div className="text-left">
      <h3 className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
        {title}
      </h3>
      <p className="font-sans text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default Features;

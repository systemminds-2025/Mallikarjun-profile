import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', // 'fade-up', 'fade-in', 'slide-left', 'slide-right', 'scale-up', 'zoom-in'
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-10'; // default hidden state
    
    switch(animation) {
      case 'fade-up': return 'opacity-100 translate-y-0';
      case 'fade-in': return 'opacity-100';
      case 'slide-left': return 'animate-slide-in-left opacity-100';
      case 'slide-right': return 'animate-slide-in-right opacity-100';
      case 'scale-up': return 'animate-scale-up opacity-100';
      case 'zoom-in': return 'animate-zoom-in opacity-100';
      default: return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch(animation) {
      case 'fade-up': return 'opacity-0 translate-y-10';
      case 'fade-in': return 'opacity-0';
      case 'slide-left': return 'opacity-0';
      case 'slide-right': return 'opacity-0';
      case 'scale-up': return 'opacity-0 scale-95';
      case 'zoom-in': return 'opacity-0 scale-105';
      default: return 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all ${isVisible ? getAnimationClass() : getInitialClass()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`, 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className }) => {
  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isVisible = entry?.isIntersecting;

  return (
    <div
      ref={setNode}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

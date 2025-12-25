import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className }) => {
  // Memoize options to prevent unnecessary observer re-creation
  const options = React.useMemo(() => ({
    threshold: 0, // Trigger as soon as any pixel is visible
    rootMargin: '100px', // Trigger 100px before the element enters the viewport
    triggerOnce: true,
  }), []);

  const [setNode, entry] = useIntersectionObserver(options);

  const isVisible = entry?.isIntersecting;

  return (
    <div
      ref={setNode}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className || ''}`}
      style={{ willChange: 'opacity, transform' }} // Optimize compositing
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

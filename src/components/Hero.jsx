import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Slideshow from './Slideshow';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = ({ images, openModal }) => {
  const { scrollY } = useScroll();
  
  // Add physics-based smoothing to the scroll value
  // This decoupling makes the parallax feel much smoother and "heavy"
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax effects using the smoothed value
  const yBackground = useTransform(smoothScrollY, [0, 1000], [0, 500]); 
  const yContent = useTransform(smoothScrollY, [0, 1000], [0, 300]);
  const opacityContent = useTransform(smoothScrollY, [0, 600], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      const offset = 80; // Adjust for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-slate-900">
      {/* Background with Parallax */}
      <motion.div 
        className="absolute left-0 w-full z-0 h-[150%] -top-[25%]" 
        style={{ y: yBackground, willChange: 'transform' }}
      >
        <Slideshow images={images} />
      </motion.div>

      {/* Overlay gradient for better text readability - Static to ensure consistent contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/30" />

      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        {/* Content with subtle Parallax */}
        <motion.div 
          className="text-center text-white max-w-5xl mx-auto py-10"
          style={{ y: yContent, opacity: opacityContent, willChange: 'transform, opacity' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div 
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white/20 transition-colors cursor-default shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase font-sans text-amber-100">The Pearl of the Indian Ocean</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight drop-shadow-2xl font-serif"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">Discover</span> <br />
            <motion.span 
              className="text-amber-500 italic inline-block"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Sri Lanka</span>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto text-slate-200 font-light tracking-wide leading-relaxed drop-shadow-lg"
          >
            Experience the untold wonders of an island paradise. Hand-picked adventures tailored just for you.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <button 
              onClick={openModal}
              className="group relative bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="flex items-center gap-3 relative z-10 transform group-hover:-translate-y-0.5 transition-transform">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button 
              onClick={scrollToDestinations}
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white/50"
            >
              Explore Locations
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

const Preloader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        
        {/* Logo Container */}
        <div className="relative w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl mb-8 animate-bounce">
           <MapPin className="w-10 h-10 text-amber-500" />
        </div>
      </div>

      <h1 className="text-4xl font-black text-white tracking-widest font-serif mb-4 animate-[fadeInUp_1s_ease-out]">
        R<span className="text-amber-500">&</span>S
      </h1>

      {/* Loading Bar */}
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 animate-[loadingBar_2s_ease-in-out_forwards] w-0"></div>
      </div>
      
      <p className="mt-4 text-slate-500 text-xs font-medium tracking-[0.2em] uppercase">Experiencing Serendipity</p>
      
      <style jsx>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

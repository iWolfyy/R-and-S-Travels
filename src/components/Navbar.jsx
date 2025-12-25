import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({ isScrolled, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen, openModal }) => {
  const navLinks = ['Home', 'Destinations', 'Packages', 'Gallery', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-slate-200/50 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo Section */}
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="R&S Logo" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-slate-800' : 'text-white drop-shadow-md'
          }`}>
            R<span className="text-amber-500">&</span>S <span className="font-light opacity-90 text-lg">Travels</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 relative group overflow-hidden ${
                isScrolled 
                  ? 'text-slate-600 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">{item}</span>
            </button>
          ))}
          
          <button 
            onClick={openModal}
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 border border-transparent hover:border-white/20"
          >
            Plan My Trip
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'bg-amber-100 text-amber-600 rotate-90' 
              : isScrolled 
                ? 'text-slate-800 hover:bg-slate-100' 
                : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="p-6 flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group flex items-center justify-between p-4 rounded-xl text-lg font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{item}</span>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-amber-500 transform group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
            >
              Plan My Trip
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

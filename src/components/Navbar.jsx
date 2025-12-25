import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const Navbar = ({ isScrolled, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-slate-200 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-lg transform group-hover:rotate-12 transition-transform">
            <MapPin className="w-6 h-6" />
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            R<span className="text-amber-500">&</span>S <span className="font-light">Travels</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Destinations', 'Packages', 'Gallery', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-semibold tracking-wide hover:text-amber-500 transition-colors relative group ${
                isScrolled ? 'text-slate-600' : 'text-slate-100'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Plan My Trip
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-slate-100 py-6 flex flex-col items-center space-y-6 animate-fadeIn">
          {['Home', 'Destinations', 'Packages', 'Gallery', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-slate-800 text-lg font-bold hover:text-amber-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

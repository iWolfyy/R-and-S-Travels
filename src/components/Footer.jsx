import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              R<span className="text-amber-500">&</span>S
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Crafting unforgettable journeys across the Pearl of the Indian Ocean. Licensed, trusted, and passionate about Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Subscribe</h4>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-500 text-white" />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} R&S Travels. All rights reserved.</p>
            <p className="text-sm mt-2">
              <a 
                href="https://pavithrawijesooriya.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span className="text-slate-400 font-normal group-hover:text-white transition-colors">Made by </span>
                {'Pavithra Wijesooriya'.split('').map((char, index) => (
                  <span 
                    key={index} 
                    className="font-bold animate-letterGlow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

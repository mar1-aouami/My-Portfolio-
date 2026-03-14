import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-12 border-t border-[#3b2211]">
      <div className="absolute inset-0 bg-[#0a0503] opacity-80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        <h2 className="font-handwriting text-5xl text-rose-gold mb-6 drop-shadow-md">Let's Connect</h2>
        
        <div className="flex items-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/marouan-aouami-654649349/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-[#0077b5] transition-all transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 relative z-10 drop-shadow-sm" />
          </a>
          <a
            href="https://github.com/mar1-aouami"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-off-white transition-all transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 relative z-10 drop-shadow-sm" />
          </a>
          <a
            href="mailto:marouanaouami1@gmail.com"
            className="w-14 h-14 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-rose-gold transition-all transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 relative z-10 drop-shadow-sm" />
          </a>
        </div>
        
        <a href="mailto:marouanaouami1@gmail.com" className="text-off-white font-bold tracking-wider hover:text-rose-gold transition-colors text-sm mb-8 drop-shadow-sm">
          marouanaouami1@gmail.com
        </a>
        
        <p className="text-[#92a88f] text-sm font-bold tracking-wide">
          &copy; 2026 Marouan Aouami. Built with precision and passion.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

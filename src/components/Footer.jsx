import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
        
        <div className="flex items-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/marouan-aouami-654649349/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/mar1-aouami"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:marouanaouami1@gmail.com"
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500 transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <a href="mailto:marouanaouami1@gmail.com" className="text-slate-400 hover:text-primary transition-colors text-sm mb-8">
          marouanaouami1@gmail.com
        </a>
        
        <p className="text-slate-500 text-sm">
          &copy; 2026 Marouan Aouami. Built with passion.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

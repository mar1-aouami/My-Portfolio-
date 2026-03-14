import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/Ana.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-semibold tracking-wide mb-2">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Marouan <span className="text-slate-400">Aouami</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6">
              Big Data & AI Engineering Student
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transforming complex data into actionable insights through intelligent algorithms and solid software architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/Aouami_Marouan_CV.pdf"
                download="Aouami_Marouan_CV.pdf"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all"
              >
                My Portfolio
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src={profilePic}
                alt="Marouan Aouami"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              />
              
              {/* Online Indicator */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20" title="Active">
                <span className="relative flex h-5 w-5 md:h-6 md:w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-green-500 border-2 border-slate-900"></span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

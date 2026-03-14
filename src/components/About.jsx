import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-slate-400 mt-2 mb-4 pr-4">Get to know more about my background, education, and passions.</p>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
          
          <div className="md:w-2/3 flex relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-slate-800 rounded-full hidden sm:block"></div>
            
            <div className="w-full sm:pl-8">
              <div className="text-slate-300 space-y-6 text-lg leading-relaxed mb-12">
                <p>
                  Engineering student at <strong className="text-primary hover:text-primary-hover transition-colors">ENSA Tetouan</strong>, specializing in <strong className="text-white">Big Data and AI</strong>. Passionate about <em>data engineering, data analysis, machine learning</em>, and the development of scalable software solutions.
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <Mail className="text-[#06b6d4] w-6 h-6 border-2 border-[#06b6d4] rounded p-0.5" />
                  <h3 className="text-xl font-semibold text-[#06b6d4]">Contact Info</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-10">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-[#06b6d4] flex-shrink-0 shadow-inner">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium tracking-wide mb-1 uppercase">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base">marouanaouami1@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-[#22c55e] flex-shrink-0 shadow-inner">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium tracking-wide mb-1 uppercase">Phone</p>
                      <p className="text-white font-medium text-sm sm:text-base">+212 631-711683</p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-[#e879f9] flex-shrink-0 shadow-inner">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium tracking-wide mb-1 uppercase">Education</p>
                      <p className="text-white font-medium text-sm sm:text-base">ENSA Tetouan</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-[#f97316] flex-shrink-0 shadow-inner">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium tracking-wide mb-1 uppercase">Location</p>
                      <p className="text-white font-medium text-sm sm:text-base">Tetouan, Morocco</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 desk-lamp-lighting opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-rose-gold mb-4 drop-shadow-md">About Me</h2>
            <p className="text-off-white mt-2 mb-4 pr-4 font-medium">Get to know more about my background, education, and passions.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#b87333] to-transparent rounded"></div>
          </div>
          
          <div className="md:w-2/3 flex relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#b87333] to-transparent rounded-full hidden sm:block"></div>
            
            <div className="w-full sm:pl-8">
              <div className="text-off-white space-y-6 text-lg leading-relaxed mb-12 drop-shadow-sm">
                <p>
                  Engineering student at <strong className="text-sage-green-metal">ENSA Tetouan</strong>, specializing in <strong className="text-rose-gold">Big Data and AI</strong>. Passionate about <em className="text-[#e0c097]">data engineering, data analysis, machine learning</em>, and the development of scalable software solutions.
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="btn-leather rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <Mail className="text-[#d4a373] w-6 h-6 border-2 border-[#d4a373] rounded p-0.5" />
                  <h3 className="text-2xl font-bold text-rose-gold drop-shadow-md">Contact Info</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-10 relative z-10">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#d4a373] flex-shrink-0 shadow-inner">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#a45a1e] text-xs font-bold tracking-wide mb-1 uppercase">Email</p>
                      <p className="text-off-white font-medium text-sm sm:text-base">marouanaouami1@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#92a88f] flex-shrink-0 shadow-inner">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#a45a1e] text-xs font-bold tracking-wide mb-1 uppercase">Phone</p>
                      <p className="text-off-white font-medium text-sm sm:text-base">+212 631-711683</p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#c07c88] flex-shrink-0 shadow-inner">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#a45a1e] text-xs font-bold tracking-wide mb-1 uppercase">Education</p>
                      <p className="text-off-white font-medium text-sm sm:text-base">ENSA Tetouan</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#d4a373] flex-shrink-0 shadow-inner">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[#a45a1e] text-xs font-bold tracking-wide mb-1 uppercase">Location</p>
                      <p className="text-off-white font-medium text-sm sm:text-base">Tetouan, Morocco</p>
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

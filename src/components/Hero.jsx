import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/Ana.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Desk Lamp Lighting Effect Overlay */}
      <div className="absolute inset-0 desk-lamp-lighting"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-handwriting text-5xl md:text-6xl text-off-white mb-2 drop-shadow-md">
              Hi, I am
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-rose-gold drop-shadow-lg">
              Marouan Aouami
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sage-green-metal drop-shadow-md">
              Big Data & AI Engineering Student
            </h2>
            <p className="text-lg text-off-white max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
              Transforming complex data into actionable insights through intelligent algorithms and solid software architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="/Aouami_Marouan_CV.pdf"
                  download="Aouami_Marouan_CV.pdf"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 btn-leather px-8 py-3 rounded-md font-medium transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Download className="h-5 w-5 opacity-80" />
                  <span className="tracking-wide">Download CV</span>
                </a>
                <a
                  href="#projects"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 btn-copper px-8 py-3 rounded-sm font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="tracking-wide uppercase">My Portfolio</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Contacts */}
              <div className="flex items-center justify-center gap-4 sm:ml-2">
                <a
                  href="https://www.linkedin.com/in/marouan-aouami-654649349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-[#0077b5] transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0077b5]/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 relative z-10" />
                </a>
                <a
                  href="https://github.com/mar1-aouami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 relative z-10" />
                </a>
                <a
                  href="mailto:marouanaouami1@gmail.com"
                  className="w-11 h-11 rounded-full btn-leather flex items-center justify-center text-[#d4a373] hover:text-rose-gold transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-gold/20"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Backlight Drop Shadow simulating lamp on frame */}
              <div className="absolute inset-0 bg-black/40 blur-2xl rounded-2xl transform translate-x-4 translate-y-8"></div>
              
              {/* Wood Frame */}
              <div className="absolute inset-0 wood-frame overflow-hidden z-10">
                <img
                  src={profilePic}
                  alt="Marouan Aouami"
                  className="w-full h-full object-cover" 
                />
              </div>
              
            </div>
          </div>

        </div>
        
        {/* Contextual Object: Luxury Fountain Pen (Left) */}
        <div className="absolute left-0 bottom-4 md:bottom-10 lg:-left-4 xl:-left-10 w-48 h-12 opacity-60 md:opacity-90 -rotate-12 -z-10 bg-contain bg-no-repeat bg-center filter drop-shadow-2xl"
             style={{backgroundImage: 'url("https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=400&auto=format&fit=crop")'}}>
        </div>
      </div>
    </section>
  );
};

export default Hero;

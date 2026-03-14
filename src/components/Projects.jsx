import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Engineering"
  ];
  const projects = [
    {
      title: "BDIA Major Portal",
      description: "A comprehensive platform created by our team for Big Data and AI students at ENSA Tetouan to simplify studies, clarify the major's vision, and help students level up easily.",
      image: "/BDIA_portal.png",
      tags: ["Web Development", "React","SQL","GitHub","Git", "Relational DB"], // Assuming React based on vercel.app, tag maps to category filter
      github: "https://github.com/BaidaneAyoub/BDIA-Major",
      demo: "https://bdia-major-nxbe.vercel.app/"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.tags.includes(filter);
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[#161616] opacity-60"></div> {/* Darker background separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-rose-gold mb-4 drop-shadow-md">The Portfolio</h2>
            <p className="text-off-white mt-2 mb-4 font-medium">Explore my latest projects in web development, data science, and AI</p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#b87333] to-transparent rounded"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 ${
                filter === category
                  ? "btn-copper"
                  : "bg-[#2b160a] text-[#d4a373] border border-[#6b3e1b] hover:bg-[#3b2211] hover:text-off-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group btn-leather rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg border-b border-[#6b3e1b] z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.3] contrast-110"
                  />
                  <div className="absolute inset-0 bg-[#3b2211]/30 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  <h3 className="text-xl font-bold text-rose-gold mb-2 group-hover:text-[#d4a373] transition-colors drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-off-white mb-6 flex-1 text-sm leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#1a0f08] text-[#92a88f] rounded-sm text-xs font-bold border border-[#3b2211] shadow-inner"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#6b3e1b]">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-bold text-[#d4a373] hover:text-rose-gold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm font-bold text-[#d4a373] hover:text-rose-gold transition-colors ml-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <p className="text-off-white text-lg">No projects added yet.</p>
              <p className="text-[#d4a373] mt-2 font-handwriting text-3xl">Check back soon for updates!</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;

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
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Portfolio</h2>
            <p className="text-slate-400 mt-2 mb-4">Explore my latest projects in web development, data science, and AI</p>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white"
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
                className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
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
              <p className="text-slate-400 text-lg">No projects added yet.</p>
              <p className="text-slate-500 mt-2">Check back soon for updates!</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;

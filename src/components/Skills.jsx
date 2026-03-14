import React from 'react';
import { GraduationCap, Award, BadgeCheck, ExternalLink } from 'lucide-react';

const Skills = () => {
  const education = [
    {
      period: "2023 - Present",
      degree: "Engineering Student in Big Data & AI",
      institution: "National School of Applied Sciences of Tetouan (ENSA)",
    },
    {
      period: "2022 - 2023",
      degree: "Baccalaureate in Physics Science",
      institution: "High School",
    }
  ];

  const certifications = [
    {
      title: "Hands-on Introduction to Linux Commands and Shell Scripting (IBM)",
      issuer: "Coursera",
      date: "Credential ID: 2AUMEAVPGO08",
      link: "https://www.coursera.org/account/accomplishments/verify/2AUMEAVPGO08"
    },
    {
      title: "Python for Data Science, AI & Development (IBM)",
      issuer: "Coursera",
      date: "Credential ID: QOF8YU8Q5PFM",
      link: "https://www.coursera.org/account/accomplishments/verify/QOF8YU8Q5PFM"
    },
    {
      title: "Python Project for Data Engineering (IBM)",
      issuer: "Coursera",
      date: "Credential ID: WXLCR06ZBW3N",
      link: "https://www.coursera.org/account/accomplishments/verify/WXLCR06ZBW3N"
    },
    {
      title: "Databases and SQL for Data Science with Python (IBM)",
      issuer: "Coursera",
      date: "Credential ID: 4J1LNTE69TCY",
      link: "https://www.coursera.org/account/accomplishments/verify/4J1LNTE69TCY"
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Linux and Shell Scripting", level: 80 },
      ]
    },
    {
      title: "Data Science & AI",
      skills: [
        { name: "Pandas & NumPy", level: 85 },
        { name: "Scikit-learn", level: 75 },
        { name: "Data Analysis & Visualization", level: 85 },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "Extract Transform and Load (ETL)", level: 80 },
        { name: "Data import/Export", level: 85 },
        { name: "Web Scraping", level: 75 },
        { name: "Jupyter", level: 90 },
        { name: "GitHub/Git", level: 85 },
      ]
    }
  ];

  return (
    <section id="resume" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-slate-400 mt-2 mb-4 max-w-2xl mx-auto md:mx-0">A summary of my academic journey, technical expertise, and professional certifications.</p>
          <div className="h-1 w-20 bg-primary rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-primary shadow-inner">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">My Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-l-4 border-primary hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium text-primary mb-2 block font-mono">{item.period}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                  <p className="text-slate-400 text-sm">{item.institution}</p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="flex items-center gap-4 mt-12 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-primary shadow-inner">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-l-4 border-primary hover:translate-x-2 transition-transform duration-300">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-primary block font-mono">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-start gap-2 group">
                      <span>{cert.title}</span>
                      <ExternalLink className="w-4 h-4 mt-1 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  </h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700/50 flex items-center justify-center text-primary shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {category.title}
                  </h4>
                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                          <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                          <div
                            className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Skills;

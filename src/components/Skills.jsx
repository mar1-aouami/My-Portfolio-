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
    <section id="resume" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-rose-gold mb-4 drop-shadow-md">Resume</h2>
          <p className="text-off-white mt-2 mb-4 max-w-2xl mx-auto md:mx-0 font-medium">A summary of my academic journey, technical expertise, and professional certifications.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#b87333] to-transparent rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#d4a373] shadow-inner">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-sage-green-metal drop-shadow-md">My Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="btn-leather p-6 rounded-md hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-bold text-[#d4a373] mb-2 block tracking-wider uppercase relative z-10">{item.period}</span>
                  <h4 className="text-xl font-bold text-rose-gold mb-1 relative z-10 drop-shadow-sm">{item.degree}</h4>
                  <p className="text-off-white text-sm relative z-10 opacity-90">{item.institution}</p>
                </div>
              ))}
            </div>

            {/* Certifications Section */}
            <div className="flex items-center gap-4 mt-12 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#d4a373] shadow-inner">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-sage-green-metal drop-shadow-md">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="btn-leather p-6 rounded-md hover:translate-x-2 transition-transform duration-300">
                  <div className="mb-2 relative z-10">
                    <span className="text-sm font-bold text-[#d4a373] block tracking-wider uppercase">{cert.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-rose-gold mb-1 relative z-10 drop-shadow-sm">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#e0bfb8] transition-colors inline-flex items-start gap-2 group">
                      <span>{cert.title}</span>
                      <ExternalLink className="w-4 h-4 mt-1 text-[#d4a373] group-hover:text-rose-gold transition-colors flex-shrink-0" />
                    </a>
                  </h4>
                  <p className="text-off-white text-sm relative z-10 opacity-90">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2b160a] border border-[#6b3e1b] flex items-center justify-center text-[#d4a373] shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-sage-green-metal drop-shadow-md">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="wood-frame p-6 sm:p-8">
                  <h4 className="text-2xl font-bold text-off-white mb-6 flex items-center gap-3 drop-shadow-md relative z-10 border-b border-[#2a1610] pb-4">
                    <span className="w-3 h-3 rounded-full btn-copper"></span>
                    {category.title}
                  </h4>
                  <div className="space-y-5 relative z-10">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-bold text-[#d4a373] tracking-wide uppercase shadow-sm">{skill.name}</span>
                          <span className="text-sm font-bold text-rose-gold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-[#1a0f08] border border-[#3b2211] rounded-sm h-2.5 shadow-inner">
                          <div
                            className="bg-gradient-to-r from-[#b87333] to-[#d4a373] h-full rounded-sm transition-all duration-1000 ease-out shadow-[0_0_5px_rgba(184,115,51,0.5)]"
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

import React from 'react';
import { ChevronRight } from './Icons';

const studies = [
  { name: "Apex Corporation", date: "//2026", desc: "Automated core infrastructure scaling." },
  { name: "VectorLabs", date: "//2026", desc: "Predictive modeling and generative workflows." },
  { name: "DataStream Inc", date: "//2026", desc: "Exabyte-scale continuous data sync." }
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-neural-arctic py-24 px-6 border-t border-neural-mint">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-sans font-bold text-neural-noir mb-12 reveal-left">
          Case Studies
        </h2>
        
        <div className="flex flex-col">
          {studies.map((study, i) => (
            <article 
              key={i} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 border-b border-neural-mint last:border-b-0 hover:bg-neural-mint transition-colors duration-180 ease-out cursor-pointer reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="md:w-1/3 mb-4 md:mb-0 flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-neural-teal/10 flex items-center justify-center">
                   <div className="w-4 h-4 bg-neural-teal rounded-full"></div>
                </div>
                <h3 className="font-mono font-bold text-xl text-neural-noir">{study.name}</h3>
              </div>
              
              <div className="md:w-1/2 mb-4 md:mb-0">
                <span className="font-mono text-neural-primary font-bold mr-4">{study.date}</span>
                <span className="text-neural-teal">{study.desc}</span>
              </div>
              
              <div className="md:w-1/6 flex justify-end">
                <ChevronRight className="w-6 h-6 text-neural-teal group-hover:translate-x-1.5 transition-transform duration-180 ease-out" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

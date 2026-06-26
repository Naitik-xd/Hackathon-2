import React from 'react';
import { Cube16Solid, Cog8Tooth, ChartPie, ArrowTrendingUp } from './Icons';

const services = [
  { icon: Cube16Solid, title: "Data Pipeline", desc: "Automated ETL workflows designed for exabyte-scale analytics and fast retrieval." },
  { icon: Cog8Tooth, title: "Agent Workflows", desc: "Deploy autonomous sub-agents that handle repetitive reasoning tasks independently." },
  { icon: ChartPie, title: "Neural Analytics", desc: "Deep synthesis and visual insights extracted from raw, unstructured data sources." },
  { icon: ArrowTrendingUp, title: "Sync Engine", desc: "Real-time bi-directional sync across all your connected enterprise systems." }
];

export const ServicesGrid = () => {
  return (
    <section id="features" className="bg-neural-arctic border-b border-neural-mint">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap border-x border-neural-mint">
        {services.map((service, i) => (
          <div 
            key={i}
            className="w-full md:w-1/2 lg:w-1/4 p-12 border-b lg:border-b-0 border-neural-mint lg:border-r last:border-r-0 group hover:bg-neural-mint hover:-translate-y-1.5 transition-all duration-180 ease-out reveal"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="mb-8">
              <service.icon className="w-12 h-12 text-neural-teal group-hover:text-neural-primary transition-colors duration-180 ease-out" />
            </div>
            <hr className="border-neural-teal/20 mb-8" />
            <h3 className="font-mono font-bold text-xl text-neural-noir mb-4">{service.title}</h3>
            <p className="text-neural-teal leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

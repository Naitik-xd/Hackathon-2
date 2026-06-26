import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

const StatItem = ({ end, decimals, suffix, label }) => {
  const { count, ref } = useCountUp(end, 2000, decimals);
  
  return (
    <div ref={ref} className="flex flex-col items-center md:items-start reveal-scale">
      <div className="text-6xl md:text-[80px] font-mono font-bold text-neural-noir leading-none mb-4">
        {count}{suffix}
      </div>
      <div className="text-xl font-medium text-neural-teal">
        {label}
      </div>
    </div>
  );
};

export const Statistics = () => {
  return (
    <section className="bg-neural-arctic py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">
        <div className="lg:w-1/3">
          <div className="font-mono text-neural-teal font-bold tracking-widest mb-6 reveal">\\\ STATISTICS</div>
          <h2 className="text-4xl md:text-5xl font-bold text-neural-noir leading-tight mb-10 reveal-left">
            Quantifiable impact across every deployment.
          </h2>
          <button 
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#dashboard');
              if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
              }
            }}
            className="inline-block border border-neural-teal text-neural-teal px-8 py-4 rounded-full font-bold hover:bg-neural-teal hover:text-neural-arctic transition-colors duration-180 ease-out reveal cursor-pointer relative z-10 pointer-events-auto"
          >
            View Report
          </button>
        </div>
        
        <div className="lg:w-2/3 w-full flex flex-col md:flex-row justify-between gap-12">
          <StatItem end={99.9} decimals={1} suffix="%" label="Uptime Guarantee" />
          <StatItem end={8.4} decimals={1} suffix="M" label="Tokens/mo Processed" />
          <StatItem end={82} decimals={0} suffix="%" label="Efficiency Gain" />
        </div>
      </div>
    </section>
  );
};

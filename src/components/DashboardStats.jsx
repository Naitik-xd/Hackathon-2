import React from 'react';

const Gauge = ({ value, label, sublabel, colorClass }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 reveal-scale">
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="transparent" strokeWidth="6" className="stroke-neural-teal/30" />
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="transparent" 
            strokeWidth="6" 
            className={`gauge-arc ${colorClass}`} 
            style={{ '--target-offset': 283 - (283 * value) / 100 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="font-mono font-bold text-3xl text-neural-arctic">{value}%</span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-neural-mint font-medium mb-1">{label}</div>
        <div className="font-mono text-sm text-neural-teal">{sublabel}</div>
      </div>
    </div>
  );
};

export const DashboardStats = () => {
  return (
    <section id="dashboard" className="bg-neural-noir border-t border-b border-neural-teal relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neural-teal">
        <Gauge value={98.7} label="System Load" sublabel="15 Core Systems" colorClass="stroke-neural-primary" />
        
        <div className="flex flex-col items-center justify-center p-12 h-full reveal">
          <div className="flex items-end gap-[8px] h-40 mb-8 stagger-children w-full justify-center">
            {[40, 65, 30, 80, 50, 90, 45, 70, 35, 85].map((height, i) => (
              <div key={i} className="w-[18px] bg-neural-teal/20 relative overflow-hidden rounded-t group hover:bg-neural-teal/40 transition-colors h-full flex items-end">
                <div 
                  className="w-full bg-[#FFC801] bar-chart-bar"
                  style={{ height: '0%', '--target-height': `${height}%`, transition: `height 400ms ease-out ${i * 60}ms` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="font-mono text-neural-mint font-medium mb-1 text-xl">SLA Response 99.99%</div>
            <div className="font-sans text-sm text-neural-teal">Global uptime monitoring</div>
          </div>
        </div>

        <Gauge value={84} label="Token Usage 8.4M" sublabel="152 Queries / 115 Nodes" colorClass="stroke-neural-mint" />
      </div>
      <style>{`
        .gauge-arc {
          stroke-dasharray: 283;
          stroke-dashoffset: 283;
          transition: stroke-dashoffset 1.5s ease-out;
        }
        .visible .gauge-arc {
          stroke-dashoffset: var(--target-offset);
        }
        .bar-chart-bar {
           height: 0%;
        }
        .visible .bar-chart-bar {
           height: var(--target-height) !important;
        }
      `}</style>
    </section>
  );
};

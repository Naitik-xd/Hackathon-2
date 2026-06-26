import React from 'react';
import { ArrowPath } from './Icons';

export const Hero = () => {
  const headline = "Automate your data. Scale your intelligence.".split(" ");

  return (
    <section id="hero" className="relative min-h-screen bg-[#172B36] flex flex-col pt-20 overflow-hidden">
      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 relative z-10">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center py-20 relative z-10 pointer-events-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-[#F1F6F4] leading-tight mb-6">
            {headline.map((word, i) => (
              <span 
                key={i} 
                className="inline-block opacity-0 translate-y-8 animate-[revealWord_500ms_ease-in-out_forwards]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p 
            className="text-lg md:text-xl text-[#D9E8E2] mb-10 max-w-lg opacity-0 animate-[fadeIn_400ms_ease-out_forwards]"
            style={{ animationDelay: `${headline.length * 60 + 200}ms` }}
          >
            Deploy autonomous workflows, synthesize vast datasets, and command your AI infrastructure from a unified, elegant interface.
          </p>
          <div 
            className="opacity-0 translate-y-8 animate-[revealWord_400ms_ease-out_forwards] relative z-10 pointer-events-auto"
            style={{ animationDelay: `${headline.length * 60 + 400}ms` }}
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#features');
                if (target) {
                  const offset = target.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 bg-[#FFC801] text-[#172B36] px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.03] transition-all duration-180 ease-out shadow-lg cursor-pointer"
            >
              <ArrowPath className="w-5 h-5 pointer-events-none" />
              Start Automating
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 absolute inset-0 md:relative md:inset-auto opacity-60 pointer-events-none flex items-center justify-center z-0">
           <div className="w-full h-full min-h-[50vh] relative flex items-center justify-center">
              <div className="absolute inset-0 mask-radial-gradient">
                 <div className="w-full h-full animate-[pulseGrid_4s_ease-in-out_infinite] opacity-70" 
                      style={{ 
                        backgroundImage: 'radial-gradient(circle at center, #FFC801 1.5px, transparent 2px)', 
                        backgroundSize: '32px 32px' 
                      }}>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="w-full bg-[#114C5A] py-4 overflow-hidden border-t border-[#114C5A]/50 mt-auto">
        <div className="marquee-container animate-marquee flex items-center gap-12 pl-12">
          {[1, 2, 3].map(set => (
            <React.Fragment key={set}>
              <span className="font-mono text-[#F1F6F4]/70 uppercase tracking-widest text-sm whitespace-nowrap">Trusted by leading teams</span>
              {["Apex", "VectorLabs", "DataStream", "Quantum", "Nexus", "Synergy", "Vertex", "Pulse"].map((company, i) => (
                <div key={`${set}-${i}`} className="bg-[#172B36]/50 px-4 py-1.5 rounded-full border border-[#F1F6F4]/10 text-[#D9E8E2] font-medium text-sm whitespace-nowrap">
                  {company}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes revealWord {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes pulseGrid {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .mask-radial-gradient {
          mask-image: radial-gradient(circle, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle, black 30%, transparent 70%);
        }
      `}</style>
    </section>
  );
};

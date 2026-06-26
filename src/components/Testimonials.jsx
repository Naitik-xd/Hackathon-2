import React from 'react';
import { StarSolid } from './Icons';

const testimonials = [
  { title: "Infrastructure that finally scales", quote: "NeuralOps reduced our pipeline latency by 80%. It's basically magic.", author: "Sarah Chen", role: "CTO", company: "Apex Corp" },
  { title: "Unprecedented reliability", quote: "The self-healing features alone saved our team hundreds of hours this quarter.", author: "Marcus Thorne", role: "VP Eng", company: "VectorLabs" },
  { title: "Intelligent orchestration", quote: "Finally, an automation platform that actually understands complex AI workflows.", author: "Elena Rostova", role: "Lead Data", company: "DataStream" },
  { title: "Seamless growth curve", quote: "Scaling from 1M to 10M tokens was completely seamless. Highly recommended.", author: "David Kim", role: "Founder", company: "Quantum AI" }
];

export const Testimonials = () => {
  return (
    <section className="bg-neural-arctic py-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-[#172B36] p-8 pl-12 rounded-xl border border-white/10 shadow-sm hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(17,76,90,0.2)] transition-all duration-200 ease-out flex flex-col justify-between reveal-scale relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left font-mono text-[11px] font-bold text-[#FFC801] tracking-[0.1em] whitespace-nowrap z-0">
                {t.company}
              </div>
              <div className="relative z-10">
                <div className="font-sans font-bold text-[#F1F6F4] text-lg mb-4">{t.title}</div>
                <div className="flex gap-1 mb-6 text-[#FFC801]">
                  {[...Array(5)].map((_, j) => <StarSolid key={j} className="w-4 h-4" />)}
                </div>
                <div className="font-mono text-[10px] tracking-widest text-neural-teal mb-4 uppercase">RATING // 5.0</div>
                <p className="font-sans text-neural-mint font-medium leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div>
                  <div className="font-bold text-neural-arctic text-sm">{t.author}</div>
                  <div className="text-neural-teal text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-neural-teal py-4 overflow-hidden border-t border-b border-neural-teal/50">
        <div className="marquee-container animate-marquee flex items-center gap-12 pl-12" style={{ animationDirection: 'reverse' }}>
          {[1, 2, 3].map(set => (
            <React.Fragment key={set}>
              <span className="font-mono text-neural-arctic/70 uppercase tracking-widest text-sm whitespace-nowrap">Backed by the best</span>
              {["YCombinator", "Sequoia", "Andreessen", "Founders Fund", "Benchmark", "Greylock", "Index", "Lightspeed"].map((company, i) => (
                <div key={`${set}-${i}`} className="bg-neural-noir/50 px-4 py-1.5 rounded-full border border-neural-arctic/10 text-neural-mint font-medium text-sm whitespace-nowrap">
                  {company}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { ChartPie, Cog8Tooth, ArrowPath, Cube16Solid } from './Icons';

export const Integrations = () => {
  const headlineRef = useRef(null);
  const [opacity, setOpacity] = useState(0.25);

  useEffect(() => {
    const handleScroll = () => {
      if (headlineRef.current) {
        const rect = headlineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = 1 - Math.max(0, Math.min(1, (rect.top - windowHeight * 0.2) / (windowHeight * 0.5)));
        setOpacity(0.25 + progress * 0.75);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "Integrate with the world's most powerful neural engines.";
  const words = text.split(" ");
  const firstPart = words.slice(0, 6).join(" ");
  const secondPart = words.slice(6).join(" ");

  return (
    <section className="bg-neural-teal py-[120px] px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="font-mono text-neural-primary font-bold tracking-widest mb-8 flex reveal">
          <span className="mr-4">\\\</span>
          {Array.from("INTEGRATIONS").map((char, i) => (
            <span 
              key={i} 
              className="inline-block opacity-0 translate-y-4 animate-[revealWord_300ms_ease-out_forwards]"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </div>

        <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-[64px] font-sans font-bold leading-tight mb-12">
          <span className="text-neural-arctic">{firstPart} </span>
          <span className="text-neural-arctic transition-opacity duration-100 ease-linear" style={{ opacity }}>{secondPart}</span>
        </h2>

        <p className="text-neural-mint text-xl max-w-2xl mb-16 reveal">
          Connect your existing data warehouses, CRM systems, and AI models in a single click. Our unified API handles the complexity.
        </p>

        <div className="flex gap-6 stagger-children">
          {[ChartPie, Cog8Tooth, ArrowPath, Cube16Solid].map((Icon, i) => (
            <button key={i} className="w-16 h-16 rounded-full bg-neural-noir border border-neural-primary flex items-center justify-center group hover:bg-neural-primary transition-colors duration-180 ease-out">
              <Icon className="w-8 h-8 text-neural-primary group-hover:text-neural-noir transition-colors duration-180 ease-out" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';

// SVG Icons
const ChartPie = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
  </svg>
);
const Cog8Tooth = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ArrowPath = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);
const Cube16Solid = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M7.488 1.156a1.5 1.5 0 0 1 1.024 0l5.25 2.152a1.5 1.5 0 0 1 .86 1.168l.241 2.404a1.5 1.5 0 0 1-.504 1.192l-4.5 4.027a1.5 1.5 0 0 1-2.028 0l-4.5-4.027a1.5 1.5 0 0 1-.504-1.192l.241-2.404a1.5 1.5 0 0 1 .86-1.168l5.25-2.152Z" />
    <path d="M8 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);
const LinkSolid = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.43 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.43-1z" clipRule="evenodd" />
  </svg>
);
const ArrowTrendingUp = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const iconsMap = {
  'chart-pie': ChartPie,
  'cog-8-tooth': Cog8Tooth,
  'arrow-path': ArrowPath,
  'cube-16-solid': Cube16Solid,
  'link-solid': LinkSolid,
  'arrow-trending-up': ArrowTrendingUp
};

const features = [
  { id: 0, icon: 'chart-pie', title: 'Neural Analytics', body: 'Real-time intelligence across every pipeline. Visualize data flow with surgical precision.' },
  { id: 1, icon: 'cog-8-tooth', title: 'Automation Engine', body: 'Deploy self-healing workflows that adapt to your data schema without manual intervention.' },
  { id: 2, icon: 'arrow-path', title: 'Sync Fabric', body: 'Bidirectional sync across all your data sources. Zero latency. Always consistent.' },
  { id: 3, icon: 'cube-16-solid', title: 'Model Registry', body: 'Version, track, and deploy your custom models from a single unified control plane.' },
  { id: 4, icon: 'link-solid', title: 'Deep Integrations', body: 'Connect to 200+ enterprise tools. Native APIs, webhooks, and event-driven triggers.' },
  { id: 5, icon: 'arrow-trending-up', title: 'Growth Intelligence', body: 'Adaptive scoring that learns from your deployment patterns and surfaces optimization paths.' }
];

export const BentoFeatures = () => {
  const activeIndexRef = useRef(0);
  const isBrowser = typeof window !== 'undefined';
  const initialMode = isBrowser && window.innerWidth >= 768 ? 'bento' : 'accordion';
  
  const [displayMode, setDisplayMode] = useState(initialMode);
  const [accordionOpen, setAccordionOpen] = useState(activeIndexRef.current);
  const [bentoActive, setBentoActive] = useState(activeIndexRef.current);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;
    let currentMode = window.innerWidth >= 768 ? 'bento' : 'accordion';
    
    const handleResize = () => {
      const newMode = window.innerWidth >= 768 ? 'bento' : 'accordion';
      
      if (newMode !== currentMode) {
        currentMode = newMode;
        
        setIsAnimating(true);
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
          setDisplayMode(newMode);
          if (newMode === 'bento') {
            setBentoActive(activeIndexRef.current);
          } else {
            setAccordionOpen(activeIndexRef.current);
          }
          setIsAnimating(false);
        }, 150);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleBentoEnter = (index) => {
    activeIndexRef.current = index;
    setBentoActive(index);
  };

  const handleBentoLeave = () => {
    setBentoActive(null);
  };

  const handleAccordionClick = (index) => {
    activeIndexRef.current = index;
    setAccordionOpen(index);
  };

  return (
    <div className="w-full relative">
      <div className={`w-full transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {displayMode === 'bento' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 w-full max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = iconsMap[feature.icon];
              const isActive = bentoActive === i;
              
              return (
                <div 
                  key={feature.id}
                  onMouseEnter={() => handleBentoEnter(i)}
                  onMouseLeave={handleBentoLeave}
                  className={`flex flex-col p-7 rounded-xl transition-all duration-180 ease-out border bg-[#114C5A] cursor-default border-white/10 ${isActive ? 'bg-[#1a5f70] -translate-y-1 border-[#FFC801] shadow-[inset_4px_0_0_0_#FFC801]' : 'hover:bg-[#1a5f70] hover:-translate-y-1 hover:border-[#FFC801] hover:shadow-[inset_4px_0_0_0_#FFC801]'}`}
                >
                  <Icon className="w-8 h-8 text-[#FFC801] mb-6" />
                  <h3 className="font-mono font-bold text-xl text-white mb-3">{feature.title}</h3>
                  <p className="font-sans text-[#D9E8E2] leading-relaxed text-sm">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-2xl mx-auto border-t border-white/10">
            {features.map((feature, i) => {
              const Icon = iconsMap[feature.icon];
              const isOpen = accordionOpen === i;
              
              return (
                <div 
                  key={feature.id}
                  className={`border-b border-white/10 transition-all duration-300 bg-[#172B36] ${isOpen ? 'border-l-4 border-l-[#FFC801]' : 'border-l-4 border-l-transparent'}`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 focus:outline-none"
                    onClick={() => handleAccordionClick(i)}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-6 h-6 text-[#FFC801]" />
                      <span className={`font-mono font-bold text-lg text-left ${isOpen ? 'text-[#FFC801]' : 'text-[#F1F6F4]'}`}>
                        {feature.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180 text-[#FFC801]' : 'text-[#D9E8E2]'}`} />
                  </button>
                  <div 
                    className="overflow-hidden transition-[max-height] ease-in-out"
                    style={{ maxHeight: isOpen ? '150px' : '0px', transitionDuration: '350ms' }}
                  >
                    <p className="px-[72px] pb-6 pt-0 font-sans text-[#D9E8E2] leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

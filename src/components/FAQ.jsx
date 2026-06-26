import React, { useState } from 'react';
import { ChevronDown } from './Icons';

const faqs = [
  { q: "What is NeuralOps?", a: "NeuralOps is a unified data automation platform that allows enterprises to orchestrate complex AI workflows without managing infrastructure." },
  { q: "How does billing work?", a: "We bill based on tokens processed and active node hours, computed daily. Enterprise plans include flat-rate options." },
  { q: "Is my data secure?", a: "Yes. All data is end-to-end encrypted and we never use your private data to train our foundational models." },
  { q: "Can I integrate custom models?", a: "Absolutely. Our platform supports BYOM (Bring Your Own Model) via standard API containers." },
  { q: "What support is included?", a: "All plans include 24/7 technical support. Enterprise plans come with a dedicated solutions architect." }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="docs" className="bg-neural-arctic py-32 px-6 border-t border-neural-mint">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-2/5">
          <div className="font-mono text-neural-teal font-bold tracking-widest mb-6 reveal">\\\ FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-neural-noir leading-tight mb-6 reveal-left">
            Common inquiries.
          </h2>
          <p className="text-neural-teal text-lg mb-10 reveal">
            Everything you need to know about the product and billing. Can't find the answer you're looking for?
          </p>
          <button className="bg-[#FFC801] text-[#172B36] font-semibold px-[28px] py-[12px] rounded-lg hover:bg-[#FF9932] transition-colors duration-180 ease-out reveal">
            Contact Us
          </button>
        </div>
        
        <div className="w-full md:w-3/5 stagger-children">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border-b border-neural-mint py-6 transition-all duration-300 ${isOpen ? 'border-l-4 pl-6 border-l-neural-primary bg-neural-mint/30' : 'border-l-4 pl-6 border-l-transparent'}`}
              >
                <button 
                  className="w-full flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className={`font-mono font-bold text-lg text-left pr-4 ${isOpen ? 'text-neural-primary' : 'text-neural-noir'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180 text-neural-primary' : 'text-neural-teal'}`} />
                </button>
                <div 
                  className="accordion-content"
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <p className="pt-4 text-neural-teal pr-8 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

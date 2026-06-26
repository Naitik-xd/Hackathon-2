import React from 'react';
import { BentoFeatures } from './BentoFeatures';

export const ProductPlaceholder = () => {
  return (
    <section className="bg-neural-noir py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="font-mono text-neural-primary font-bold tracking-widest mb-6 reveal">\\\ OUR PRODUCT</div>
        
        <div className="w-full relative min-h-[400px]">
          <h2 className="text-4xl md:text-5xl font-bold text-neural-arctic sticky top-20 text-center py-10 z-10 bg-neural-noir/90 backdrop-blur-sm reveal-scale">
            Engineered for autonomy.
          </h2>
          <div className="pt-[50px] pb-[100px] w-full flex justify-center text-neural-mint/50">
             {/* FEATURE 2: BENTO-TO-ACCORDION MOUNTS HERE */}
             <BentoFeatures />
          </div>
        </div>
      </div>
    </section>
  );
};

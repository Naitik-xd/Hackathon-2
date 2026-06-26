import React, { useRef, memo } from 'react';

const pricingMatrix = {
  tiers: ['starter', 'pro', 'enterprise'],
  baseRates: { starter: 29, pro: 79, enterprise: 199 },
  annualMultiplier: 0.80,
  currencyConfig: {
    USD: { symbol: '$', tariff: 1.00 },
    INR: { symbol: '₹', tariff: 83.5 },
    EUR: { symbol: '€', tariff: 0.92 }
  },
  features: {
    starter: ['5 pipelines', '100K tokens/mo', 'Basic analytics', 'Email support'],
    pro: ['25 pipelines', '2M tokens/mo', 'Advanced analytics', 'Priority support', 'Custom agents'],
    enterprise: ['Unlimited pipelines', '10M+ tokens/mo', 'Full dashboard', 'Dedicated support', 'SLA guarantee', 'Custom integrations']
  }
};

const CheckIcon = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const PricingCard = memo(React.forwardRef(({ tier, isPro, badgeRef }, ref) => {
  const config = pricingMatrix.currencyConfig['USD'];
  const basePrice = pricingMatrix.baseRates[tier];
  const initialPrice = `${config.symbol}${basePrice}`;
  const features = pricingMatrix.features[tier];
  
  return (
    <div className={`flex flex-col p-8 rounded-2xl border transition-transform duration-200 ease-out hover:-translate-y-2 ${isPro ? 'bg-[#FFC801] text-[#172B36] border-[#FFC801] shadow-xl shadow-[#FFC801]/20 scale-105 z-10' : 'bg-[#172B36] text-[#F1F6F4] border-[#114C5A]'}`}>
      <div className="flex justify-between items-start mb-6 min-h-[32px]">
        <h3 className="font-mono font-bold text-2xl uppercase tracking-wider">{tier}</h3>
        {isPro && (
          <span 
            ref={badgeRef} 
            className="font-mono text-xs font-bold bg-[#172B36] text-[#FFC801] px-3 py-1.5 rounded-full"
            style={{ display: 'none' }}
          >
            SAVE 20%
          </span>
        )}
      </div>
      
      <div className="mb-8 flex items-end gap-1">
        <span 
          ref={ref} 
          className="font-mono font-bold text-[64px] leading-none transition-opacity duration-150 ease-out"
        >
          {initialPrice}
        </span>
        <span className="font-sans font-medium opacity-70 mb-2">/mo</span>
      </div>
      
      <div className="flex-grow">
        <ul className="flex flex-col gap-4 mb-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 font-sans font-medium opacity-90">
              <span className={isPro ? 'text-[#172B36]' : 'text-[#FFC801]'}>
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <button className={`w-full py-4 rounded-full font-bold transition-all duration-150 ease-out hover:scale-[1.02] ${isPro ? 'bg-[#172B36] text-[#FFC801] hover:bg-black' : 'bg-[#FFC801] text-[#172B36] hover:opacity-90'}`}>
        Get Started
      </button>
    </div>
  );
}));

const PricingMatrixComponent = () => {
  const isAnnualRef = useRef(false);
  const currencyRef = useRef('USD');
  const priceRefs = useRef({});
  const badgeRef = useRef(null);
  const pillRef = useRef(null);

  const updatePrices = () => {
    const isAnnual = isAnnualRef.current;
    const currency = currencyRef.current;
    const config = pricingMatrix.currencyConfig[currency];

    pricingMatrix.tiers.forEach(tier => {
      const node = priceRefs.current[tier];
      if (node) {
        node.style.opacity = '0';
        setTimeout(() => {
          const baseRate = pricingMatrix.baseRates[tier];
          const finalPrice = Math.round(baseRate * config.tariff * (isAnnual ? pricingMatrix.annualMultiplier : 1));
          node.textContent = `${config.symbol}${finalPrice}`;
          node.style.opacity = '1';
        }, 150);
      }
    });

    if (badgeRef.current) {
      badgeRef.current.style.display = isAnnual ? 'inline-block' : 'none';
    }
    
    if (pillRef.current) {
      pillRef.current.style.transform = isAnnual ? 'translateX(100%)' : 'translateX(0)';
    }
  };

  const handleToggle = () => {
    isAnnualRef.current = !isAnnualRef.current;
    updatePrices();
  };

  const handleCurrency = (e) => {
    currencyRef.current = e.target.value;
    updatePrices();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-12 gap-8">
        <div className="flex items-center gap-4">
          <span className="font-mono font-medium text-neural-mint text-sm">Monthly</span>
          <button 
            type="button" 
            className="w-14 h-7 bg-neural-noir rounded-full p-1 relative border border-neural-teal focus:outline-none flex items-center" 
            onClick={handleToggle}
            aria-label="Toggle billing cycle"
          >
            <div 
              ref={pillRef} 
              className="w-5 h-5 bg-[#FFC801] rounded-full transition-transform duration-200 ease-out" 
            />
          </button>
          <span className="font-mono font-medium text-neural-mint text-sm">Annual</span>
        </div>
        
        <select 
          className="bg-[#172B36] text-[#F1F6F4] border border-[#114C5A] rounded-lg px-4 py-2 font-mono text-sm focus:outline-none focus:border-[#FFC801] appearance-none cursor-pointer outline-none"
          onChange={handleCurrency}
          defaultValue="USD"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full items-center reveal-scale">
        {pricingMatrix.tiers.map(tier => (
          <PricingCard 
            key={tier} 
            tier={tier} 
            isPro={tier === 'pro'} 
            badgeRef={tier === 'pro' ? badgeRef : null}
            ref={el => priceRefs.current[tier] = el}
          />
        ))}
      </div>
    </div>
  );
};

export const PricingPlaceholder = () => {
  return (
    <section id="pricing" className="bg-[#114C5A] py-32 px-6 border-b border-neural-mint">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="font-mono text-[#FFC801] font-bold tracking-widest mb-6 reveal">\\\ PRICING</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F1F6F4] mb-16 reveal">
          Transparent, scalable pricing.
        </h2>
        
        <div className="w-full flex justify-center text-neural-mint/50">
           {/* FEATURE 1: PRICING MATRIX MOUNTS HERE */}
           <PricingMatrixComponent />
        </div>
      </div>
    </section>
  );
};

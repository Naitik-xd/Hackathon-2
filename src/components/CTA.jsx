import React, { useState } from 'react';

export const CTA = () => {
  const [subscribed, setSubscribed] = useState(false);
  const headline = "Get smarter about AI automation.".split(" ");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="bg-neural-noir py-32 px-6 bg-dot-grid relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="font-mono text-neural-primary font-bold tracking-widest mb-6 reveal">\\\ NEWSLETTER</div>
        <h2 className="text-4xl md:text-[56px] font-bold text-neural-arctic leading-tight mb-12 flex flex-wrap justify-center">
          {headline.map((word, i) => (
            <span 
              key={i} 
              className="inline-block opacity-0 translate-y-4 animate-[revealWord_400ms_ease-in-out_forwards]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h2>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full max-w-lg gap-4 reveal" style={{ animationDelay: '400ms' }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required
            className="flex-grow bg-transparent border border-neural-teal rounded-full px-6 py-4 text-neural-arctic focus:outline-none focus:border-neural-primary transition-colors duration-180 placeholder:text-neural-teal"
          />
          <button 
            type="submit"
            className="bg-neural-primary text-neural-noir font-bold px-8 py-4 rounded-full hover:bg-neural-primary-hover transition-colors duration-150 ease-out whitespace-nowrap min-w-[160px]"
          >
            {subscribed ? "✓ Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

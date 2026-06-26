import React, { useState, useEffect } from 'react';
import { LightningBolt, XMark } from './Icons';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const offset = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    };
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(a => a.addEventListener('click', handleSmoothScroll));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach(a => a.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${isScrolled ? 'bg-neural-noir shadow-lg border-neural-teal' : 'bg-neural-noir/90 backdrop-blur-md border-neural-teal'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-neural-arctic">
          <LightningBolt className="w-6 h-6 text-neural-primary" />
          <span className="font-mono font-bold text-xl tracking-tight">NeuralOps</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-neural-mint hover:text-neural-primary transition-colors duration-150 ease-out">Features</a>
          <a href="#pricing" className="text-sm font-medium text-neural-mint hover:text-neural-primary transition-colors duration-150 ease-out">Pricing</a>
          <a href="#case-studies" className="text-sm font-medium text-neural-mint hover:text-neural-primary transition-colors duration-150 ease-out">Case Studies</a>
          <a href="#docs" className="text-sm font-medium text-neural-mint hover:text-neural-primary transition-colors duration-150 ease-out">Docs</a>
          
          <a href="#pricing" className="bg-neural-primary text-neural-noir px-5 py-2 rounded-full text-sm font-bold hover:bg-neural-primary-hover hover:scale-[1.03] transition-all duration-180 ease-out">
            Get Started
          </a>
        </nav>

        <button 
          className="md:hidden text-neural-mint focus:outline-none relative w-6 h-6"
          onClick={() => setMobileMenuOpen(true)}
        >
          <div className="flex flex-col gap-1.5 w-full absolute top-1/2 -translate-y-1/2">
            <span className="w-full h-0.5 bg-current rounded-full transition-transform"></span>
            <span className="w-full h-0.5 bg-current rounded-full transition-transform"></span>
            <span className="w-full h-0.5 bg-current rounded-full transition-transform"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-neural-noir z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button 
            className="absolute top-6 right-6 text-neural-mint hover:text-neural-primary transition-colors duration-150"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMark className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-8 stagger-children visible">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-neural-arctic hover:text-neural-primary transition-colors">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-neural-arctic hover:text-neural-primary transition-colors">Pricing</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-neural-arctic hover:text-neural-primary transition-colors">Case Studies</a>
            <a href="#docs" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-neural-arctic hover:text-neural-primary transition-colors">Docs</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-neural-primary text-neural-noir px-8 py-3 rounded-full text-lg font-bold flex items-center justify-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { LinkSolid, XMark } from './Icons';

const modalContent = {
  'About Us': { title: "About NeuralOps", body: "NeuralOps is a next-generation AI data automation platform built to help enterprises orchestrate complex workflows at scale. We're a team of engineers obsessed with reliability, speed, and zero data loss." },
  'Careers': { title: "Join Our Team", body: "We're hiring across engineering, product, and design. If you're passionate about AI infrastructure and want to work on problems that matter, we'd love to hear from you. Reach out at careers@neuralops.ai" },
  'Blog': { title: "NeuralOps Blog", body: "We write about AI infrastructure, data engineering, LLM deployment patterns, and lessons from running neural workloads at enterprise scale. New posts every two weeks." },
  'Contact': { title: "Contact Us", body: "For enterprise inquiries: enterprise@neuralops.ai\nFor technical support: support@neuralops.ai\nFor partnerships: partners@neuralops.ai\n\nWe typically respond within 24 hours." },
  'Terms of Service': { title: "Terms of Service", body: "By using NeuralOps, you agree to our terms governing data processing, API usage limits, SLA commitments, and acceptable use policies. Full terms available upon enterprise onboarding." },
  'Privacy Policy': { title: "Privacy Policy", body: "NeuralOps processes only the data you explicitly connect. We never sell, share, or train on your data. All data is encrypted in transit and at rest using AES-256." },
  'Cookie Policy': { title: "Cookie Policy", body: "We use essential cookies for authentication and performance analytics only. No third-party advertising cookies. You can manage preferences in your account settings." },
  'Security': { title: "Security", body: "NeuralOps is SOC 2 Type II compliant. We run continuous penetration testing, maintain a bug bounty program, and offer dedicated security reviews for enterprise customers." }
};

export const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleEsc);
      // Small timeout to allow mount before starting transition
      const t = setTimeout(() => setIsRendered(true), 10);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        clearTimeout(t);
      };
    } else {
      setIsRendered(false);
    }
  }, [activeModal]);

  const handleClose = () => {
    setIsRendered(false);
    setTimeout(() => setActiveModal(null), 150);
  };

  return (
    <footer className="bg-neural-noir pt-24 pb-8 px-6 border-t border-neural-teal/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24 relative z-10 pointer-events-auto">
          <div className="w-full md:w-1/3">
            <span className="font-mono font-bold text-2xl text-neural-arctic tracking-tight mb-6 block">NeuralOps</span>
            <p className="text-neural-mint text-sm leading-relaxed max-w-sm mb-8">
              The premier automation platform for scaling AI infrastructure and data pipelines with deterministic reliability.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <a key={i} href="#" aria-label="Social Link" className="w-10 h-10 rounded-full bg-neural-teal/20 flex items-center justify-center text-neural-mint hover:bg-neural-primary hover:text-neural-noir transition-colors duration-180 ease-out">
                  <LinkSolid className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/3 flex flex-wrap gap-12 md:justify-end">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono font-bold text-neural-arctic mb-2">Quick Links</h4>
              {[
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Case Studies', href: '#case-studies' },
                { name: 'Documentation', href: '#docs' }
              ].map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                  }}
                  className="footer-link relative z-10"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-mono font-bold text-neural-arctic mb-2">Company</h4>
              {['About Us', 'Careers', 'Blog', 'Contact'].map(link => (
                <a 
                  key={link} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setActiveModal(link); }}
                  className="footer-link relative z-10"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-mono font-bold text-neural-arctic mb-2">Policies</h4>
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security'].map(link => (
                <a 
                  key={link} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setActiveModal(link); }}
                  className="footer-link relative z-10"
                >
                  {link}
                </a>
              ))}
            </div>
            <style>{`
              .footer-link {
                color: #D9E8E2;
                text-decoration: none;
                cursor: pointer;
                display: block;
                transition: color 150ms ease-out;
                pointer-events: auto !important;
              }
              .footer-link:hover {
                color: #FFC801;
              }
            `}</style>
          </div>
        </div>

        <div className="absolute bottom-[60px] left-0 w-full text-center select-none pointer-events-none z-0 reveal-scale">
          <h1 className="font-sans font-black text-[#F1F6F4] opacity-[0.06] tracking-tighter leading-none" style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}>
            NEURALOPS
          </h1>
        </div>
      </div>

      {activeModal && modalContent[activeModal] && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center transition-all"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.7)', 
            backdropFilter: 'blur(4px)',
            opacity: isRendered ? 1 : 0,
            pointerEvents: 'auto',
            transitionDuration: isRendered ? '200ms' : '150ms',
            transitionTimingFunction: isRendered ? 'ease-out' : 'ease-in'
          }}
          onClick={handleClose}
        >
          <div 
            className="relative bg-[#172B36] border border-[#114C5A] rounded-2xl p-10 max-w-[480px] w-[90%] flex flex-col transition-transform"
            style={{ 
              transform: isRendered ? 'scale(1)' : 'scale(0.95)',
              transitionDuration: isRendered ? '200ms' : '150ms',
              transitionTimingFunction: isRendered ? 'ease-out' : 'ease-in'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 text-[#F1F6F4] hover:text-[#FFC801] transition-colors duration-180 ease-out cursor-pointer"
            >
              <XMark className="w-6 h-6" />
            </button>
            <h3 className="font-mono font-bold text-[#FFC801] text-[20px] mb-4">
              {modalContent[activeModal].title}
            </h3>
            <p className="font-sans text-[#D9E8E2] text-[15px] leading-[1.7] whitespace-pre-wrap mb-8">
              {modalContent[activeModal].body}
            </p>
            <div className="mt-6 pt-4 border-t border-white/10" style={{ marginTop: '24px', paddingTop: '16px' }}>
              <span className="font-mono" style={{ color: '#D9E8E2', opacity: 1, fontSize: '12px', fontFamily: '"JetBrains Mono", monospace' }}>
                ⚡ This page is a hackathon submission. Content is for demonstration purposes only.
              </span>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

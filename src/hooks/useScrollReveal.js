import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children, .gauge-arc, .bar-chart-bar'
    );
    revealElements.forEach((el) => observer.observe(el));

    // For the split section scroll-linked opacity logic
    const splitLeftSection = document.querySelector('.split-left-section');
    if (splitLeftSection) {
        const pulseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const grid = entry.target.querySelector('.bg-dot-grid-pulse');
                if (grid) {
                    if (entry.intersectionRatio > 0.5) {
                        grid.classList.add('intense');
                    } else {
                        grid.classList.remove('intense');
                    }
                }
            })
        }, { threshold: [0, 0.5, 1] });
        pulseObserver.observe(splitLeftSection);
    }

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}

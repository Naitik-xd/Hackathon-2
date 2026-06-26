import { useEffect, useState, useRef } from 'react';

export function useCountUp(end, durationMs = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
            
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(easeProgress * end);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, durationMs]);

  return { count: Number(count).toFixed(decimals), ref: elementRef };
}

import React from 'react';
import { LinkIcon, ArrowPath, ArrowTrendingUp } from './Icons';

export const SplitSection = () => {
  return (
    <section
      id="approach"
      className="split-section-wrapper"
      style={{
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        position: 'relative'
      }}
    >
      <div className="split-panel-left" style={{
        width: '50%',
        maxWidth: '50%',
        flex: 'none',
        minHeight: '600px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundColor: '#172B36',
        backgroundImage: 'radial-gradient(circle, rgba(255,200,1,0.2) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}>
        {/* Orb 1 */}
        <div style={{
          position: 'absolute', width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,1,0.12) 0%, transparent 70%)',
          top: '15%', left: '10%',
          animation: 'orbFloat 7s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        {/* Orb 2 */}
        <div style={{
          position: 'absolute', width: '200px', height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,153,50,0.1) 0%, transparent 70%)',
          bottom: '20%', right: '10%',
          animation: 'orbFloat 9s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }} />
        {/* Orb 3 */}
        <div style={{
          position: 'absolute', width: '150px', height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(17,76,90,0.5) 0%, transparent 70%)',
          top: '55%', left: '35%',
          animation: 'orbFloat 5s ease-in-out infinite 1.5s',
          pointerEvents: 'none',
        }} />

        {/* 1. A large decorative background number/text */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(120px, 18vw, 200px)',
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: '900',
          color: 'rgba(255, 200, 1, 0.04)',
          letterSpacing: '-0.05em',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}>
          01
        </div>

        {/* 2. A centered icon + label badge */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          pointerEvents: 'none',
        }}>
          {/* Outer ring */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255,200,1,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            animation: 'spinSlow 12s linear infinite',
          }}>
            {/* Inner ring */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '1px solid rgba(255,200,1,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Center dot */}
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFC801',
                boxShadow: '0 0 20px rgba(255,200,1,0.6), 0 0 40px rgba(255,200,1,0.3)',
              }} />
            </div>
            {/* Orbit dot */}
            <div style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FF9932',
              top: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(255,153,50,0.8)',
            }} />
          </div>

          {/* Label below */}
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(255,200,1,0.6)',
            textTransform: 'uppercase',
          }}>
            Neural Core
          </div>
        </div>

        {/* 3. Three floating stat pills scattered on the panel */}
        {[
          { label: '99.9%', sub: 'Uptime', top: '18%', left: '12%', delay: '0s' },
          { label: '8.4M',  sub: 'Tokens', top: '68%', left: '60%', delay: '1.5s' },
          { label: '<2ms',  sub: 'Latency', top: '78%', left: '8%', delay: '3s' },
        ].map((pill) => (
          <div key={pill.label} style={{
            position: 'absolute',
            top: pill.top,
            left: pill.left,
            background: 'rgba(17, 76, 90, 0.8)',
            border: '1px solid rgba(255,200,1,0.25)',
            borderRadius: '10px',
            padding: '10px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            backdropFilter: 'blur(8px)',
            animation: `orbFloat 6s ease-in-out infinite ${pill.delay}`,
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '18px',
              fontWeight: '700',
              color: '#FFC801',
              lineHeight: 1,
            }}>{pill.label}</span>
            <span style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '10px',
              color: 'rgba(217,232,226,0.7)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>{pill.sub}</span>
          </div>
        ))}
      </div>
      
      <div className="split-panel-right" style={{
        width: '50%',
        maxWidth: '50%',
        flex: 'none',
        overflow: 'hidden',
        boxSizing: 'border-box',
        backgroundColor: '#F1F6F4',
        padding: '60px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <div className="font-mono text-neural-teal font-bold tracking-widest mb-6 reveal">\\\ OUR APPROACH</div>
        <h2 className="text-4xl md:text-5xl font-bold text-neural-noir leading-tight mb-16 reveal">
          Uncompromising data fidelity.
        </h2>

        <div className="flex flex-col gap-12 stagger-children">
          {[
            { icon: LinkIcon, title: "Deterministic Linking", desc: "Ensure absolute consistency across disparate data silos with cryptographically verifiable links." },
            { icon: ArrowPath, title: "Self-Healing Pipelines", desc: "Automated anomaly detection identifies and resolves pipeline breakages before they impact downstream models." },
            { icon: ArrowTrendingUp, title: "Continuous Scaling", desc: "Elastic compute allocation ensures performance remains constant regardless of data velocity spikes." }
          ].map((feature, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="w-12 h-12 shrink-0 rounded bg-neural-teal/10 flex items-center justify-center group-hover:bg-neural-primary/20 transition-colors duration-180 ease-out">
                <feature.icon className="w-6 h-6 text-neural-teal group-hover:text-neural-primary transition-colors duration-180 ease-out" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-neural-noir mb-2">{feature.title}</h3>
                <p className="text-neural-teal leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .split-section-wrapper {
            flex-direction: column !important;
          }
          .split-panel-left, .split-panel-right {
            width: 100% !important;
            maxWidth: 100% !important;
            flex: none !important;
          }
        }
      `}</style>
    </section>
  );
};

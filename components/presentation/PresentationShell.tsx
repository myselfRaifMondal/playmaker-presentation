'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { slides } from '@/data/presentation';
import SlideProgress from './SlideProgress';
import PresentationControls from './PresentationControls';

interface Props {
  children: React.ReactNode;
}

export default function PresentationShell({ children }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const total = slides.length;

  // Intersection Observer for active slide detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) {
              setActiveSlide(idx);
              window.history.replaceState(null, '', `#slide-${idx + 1}`);
            }
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    // Observe all sections
    const sections = container.querySelectorAll('.slide-section');
    sections.forEach((s, i) => {
      sectionRefs.current[i] = s as HTMLElement;
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  // Handle initial hash
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/slide-(\d+)/);
    if (match) {
      const idx = parseInt(match[1], 10) - 1;
      scrollToSlide(idx);
    }
  }, []);

  const scrollToSlide = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, total - 1));
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll('.slide-section');
    const target = sections[clamped] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeSlide + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(total - 1);
      } else if (e.key === 'Escape' && showOverview) {
        setShowOverview(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSlide, scrollToSlide, total, showOverview]);

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* Main scroll container */}
      <div ref={containerRef} className="presentation-container" aria-label="Presentation slides">
        {children}
      </div>

      {/* Fixed UI chrome — hidden on print */}
      <div className="no-print">
        <SlideProgress
          activeSlide={activeSlide}
          total={total}
          onNavigate={scrollToSlide}
        />
        <PresentationControls
          activeSlide={activeSlide}
          total={total}
          onPrev={() => scrollToSlide(activeSlide - 1)}
          onNext={() => scrollToSlide(activeSlide + 1)}
          onOverview={() => setShowOverview(true)}
        />
      </div>

      {/* Overview grid overlay */}
      {showOverview && (
        <div
          className="no-print fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(7,8,7,0.95)', backdropFilter: 'blur(12px)' }}
          onClick={() => setShowOverview(false)}
        >
          <div
            className="grid gap-3 p-8"
            style={{ gridTemplateColumns: 'repeat(5, 1fr)', maxWidth: '900px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => { scrollToSlide(idx); setShowOverview(false); }}
                className="group flex flex-col items-center gap-2 text-left focus-visible:outline-none"
              >
                <div
                  className="w-full aspect-video rounded flex items-center justify-center text-xs transition-all duration-200"
                  style={{
                    background: activeSlide === idx
                      ? 'rgba(215,255,95,0.08)'
                      : 'var(--arb-surface)',
                    border: `1px solid ${activeSlide === idx ? 'var(--arb-acid)' : 'var(--arb-border)'}`,
                    fontFamily: 'var(--font-data)',
                    color: activeSlide === idx ? 'var(--arb-acid)' : 'var(--arb-muted)',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span
                  className="text-center leading-tight"
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '9px',
                    letterSpacing: '0.06em',
                    color: activeSlide === idx ? 'var(--arb-acid)' : 'var(--arb-muted)',
                  }}
                >
                  {slide.title}
                </span>
              </button>
            ))}
          </div>
          <button
            className="absolute top-6 right-6 text-sm"
            style={{ color: 'var(--arb-muted)', fontFamily: 'var(--font-data)' }}
            onClick={() => setShowOverview(false)}
          >
            ESC
          </button>
        </div>
      )}
    </div>
  );
}

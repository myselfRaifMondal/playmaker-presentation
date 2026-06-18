'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown, Maximize2, Minimize2, LayoutGrid } from 'lucide-react';

interface Props {
  activeSlide: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onOverview: () => void;
}

export default function PresentationControls({ activeSlide, total, onPrev, onNext, onOverview }: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const btnStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--arb-surface)',
    border: '1px solid var(--arb-border)',
    borderRadius: '6px',
    color: 'var(--arb-muted)',
    cursor: 'pointer',
    transition: 'border-color 0.15s, color 0.15s',
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
      <button
        onClick={onPrev}
        disabled={activeSlide === 0}
        style={{ ...btnStyle, opacity: activeSlide === 0 ? 0.3 : 1 }}
        aria-label="Previous slide"
      >
        <ChevronUp size={14} />
      </button>

      <button
        onClick={onNext}
        disabled={activeSlide === total - 1}
        style={{ ...btnStyle, opacity: activeSlide === total - 1 ? 0.3 : 1 }}
        aria-label="Next slide"
      >
        <ChevronDown size={14} />
      </button>

      <div style={{ width: '1px', height: '20px', background: 'var(--arb-border)', margin: '0 2px' }} />

      <button onClick={onOverview} style={btnStyle} aria-label="Slide overview">
        <LayoutGrid size={13} />
      </button>

      <button onClick={toggleFullscreen} style={btnStyle} aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>
        {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
      </button>
    </div>
  );
}

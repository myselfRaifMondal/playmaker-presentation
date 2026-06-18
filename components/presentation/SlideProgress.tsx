import { slides } from '@/data/presentation';

interface Props {
  activeSlide: number;
  total: number;
  onNavigate: (idx: number) => void;
}

export default function SlideProgress({ activeSlide, total, onNavigate }: Props) {
  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2"
      aria-label="Slide navigation"
    >
      {/* Slide counter */}
      <div
        className="mb-3 text-center"
        style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.1em', color: 'var(--arb-dim)' }}
      >
        <div style={{ color: 'var(--arb-muted)', fontSize: '11px' }}>{String(activeSlide + 1).padStart(2, '0')}</div>
        <div style={{ height: '16px', width: '1px', background: 'var(--arb-dim)', margin: '2px auto' }} />
        <div>{String(total).padStart(2, '0')}</div>
      </div>

      {/* Dots */}
      {slides.map((slide, idx) => (
        <button
          key={slide.id}
          onClick={() => onNavigate(idx)}
          title={slide.title}
          aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
          aria-current={activeSlide === idx ? 'true' : undefined}
          className="group relative flex items-center justify-center"
          style={{ width: '20px', height: '20px' }}
        >
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: activeSlide === idx ? '6px' : '4px',
              height: activeSlide === idx ? '6px' : '4px',
              background: activeSlide === idx ? 'var(--arb-acid)' : 'var(--arb-dim)',
              boxShadow: activeSlide === idx ? '0 0 6px var(--arb-acid)' : 'none',
            }}
          />
          {/* Tooltip */}
          <span
            className="absolute right-7 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '9px',
              letterSpacing: '0.08em',
              color: 'var(--arb-muted)',
              background: 'var(--arb-surface)',
              border: '1px solid var(--arb-border)',
              padding: '3px 7px',
              borderRadius: '4px',
            }}
          >
            {slide.title}
          </span>
        </button>
      ))}
    </nav>
  );
}

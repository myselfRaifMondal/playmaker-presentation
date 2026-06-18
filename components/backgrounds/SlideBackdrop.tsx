interface Props {
  accentColor?: string;
}

export default function SlideBackdrop({ accentColor }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="tech-grid" />

      {/* Subtle accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '60%',
          height: '50%',
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor ?? 'rgba(103,223,245,0.035)'} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent, rgba(7,8,7,0.4))',
          pointerEvents: 'none',
        }}
      />

      {/* Noise */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.02 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise-slide">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-slide)" />
      </svg>
    </div>
  );
}

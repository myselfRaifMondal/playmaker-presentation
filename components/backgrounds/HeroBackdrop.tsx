export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base: handled by body background */}

      {/* Technical grid */}
      <div className="tech-grid" />

      {/* Acid-green directional glow — top-left concentrated */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse at 70% 30%, rgba(215,255,95,0.055) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Cyan secondary glow — bottom-right */}
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at 80% 80%, rgba(103,223,245,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple glow — mid-left */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse at 20% 50%, rgba(180,144,255,0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Radial spotlight behind right-side console */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '55%',
          height: '80%',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(215,255,95,0.03) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      {/* Noise overlay via SVG filter */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise-hero">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-hero)" />
      </svg>
    </div>
  );
}

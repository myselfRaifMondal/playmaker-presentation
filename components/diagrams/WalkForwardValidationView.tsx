import { validationWindows } from '@/data/presentation';

export default function WalkForwardValidationView() {
  const minReturn = Math.min(...validationWindows.map((w) => w.monthlyReturn));
  const maxReturn = Math.max(...validationWindows.map((w) => w.monthlyReturn));
  const chartH = 80;
  const chartW = 460;
  const padX = 8;
  const padY = 8;

  const toY = (v: number) =>
    padY + chartH - ((v - minReturn) / (maxReturn - minReturn)) * chartH;

  const points = validationWindows
    .map((w, i) => `${padX + (i / (validationWindows.length - 1)) * chartW},${toY(w.monthlyReturn)}`)
    .join(' ');

  return (
    <div
      role="img"
      aria-label="Walk-forward validation showing 12 rolling windows with monthly returns averaging 1.35% and annualised return of 16.2%"
      style={{ width: '100%' }}
    >
      {/* Window strips */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '8px' }}>
          Rolling Validation Windows
        </div>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'stretch' }}>
          {validationWindows.map((w, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {/* Train */}
              <div
                  title={`Train window ${i + 1}`}
                style={{
                  height: '10px',
                  background: 'rgba(180,144,255,0.25)',
                  border: '1px solid rgba(180,144,255,0.3)',
                    borderRadius: '2px',
                }}
              />
              {/* Embargo */}
              <div
                style={{
                  height: '4px',
                  background: 'rgba(242,184,75,0.3)',
                  borderRadius: '1px',
                }}
              />
              {/* Test */}
              <div
                style={{
                  height: '6px',
                  background: w.monthlyReturn > 1.35 ? 'rgba(111,227,161,0.35)' : 'rgba(103,223,245,0.25)',
                  border: `1px solid ${w.monthlyReturn > 1.35 ? 'rgba(111,227,161,0.4)' : 'rgba(103,223,245,0.3)'}`,
                  borderRadius: '2px',
                }}
              />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '6px' }}>
          {[
            { color: 'rgba(180,144,255,0.5)',  label: 'Train (90d)' },
            { color: 'rgba(242,184,75,0.5)',   label: 'Embargo (7d)' },
            { color: 'rgba(111,227,161,0.5)',  label: 'Test (30d)' },
          ].map((l) => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '12px', height: '5px', background: l.color, borderRadius: '1px', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)' }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'start' }}>
        {/* Monthly return line chart */}
        <div>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '8px' }}>
            Monthly Return per Window
          </div>
          <svg
            viewBox={`0 0 ${chartW + padX * 2} ${chartH + padY * 2 + 20}`}
            style={{ width: '100%', height: 'auto', overflow: 'visible' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Zero / mean lines */}
            <line x1={padX} y1={toY(1.35)} x2={padX + chartW} y2={toY(1.35)} stroke="var(--arb-acid)" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.5" />
            <text x={padX + chartW + 4} y={toY(1.35) + 4} fill="var(--arb-acid)" fontSize="8" fontFamily="var(--font-data)">avg</text>

            {/* Area fill */}
            <polygon
              points={`${padX},${padY + chartH} ${points} ${padX + chartW},${padY + chartH}`}
              fill="rgba(111,227,161,0.06)"
            />

            {/* Line */}
            <polyline points={points} fill="none" stroke="var(--arb-success)" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />

            {/* Data points */}
            {validationWindows.map((w, i) => {
              const px = padX + (i / (validationWindows.length - 1)) * chartW;
              const py = toY(w.monthlyReturn);
              return (
                <circle key={i} cx={px} cy={py} r="3" fill="var(--arb-success)" opacity="0.8" />
              );
            })}

            {/* X axis labels */}
            {validationWindows.map((_, i) => (
              <text
                key={i}
                x={padX + (i / (validationWindows.length - 1)) * chartW}
                y={padY + chartH + 16}
                fill="var(--arb-dim)"
                fontSize="7"
                fontFamily="var(--font-data)"
                textAnchor="middle"
              >
                W{i + 1}
              </text>
            ))}
          </svg>
        </div>

        {/* Stats panel */}
        <div
          style={{
            background: 'var(--arb-surface)',
            border: '1px solid var(--arb-border)',
            borderRadius: '8px',
            padding: '16px',
            minWidth: '180px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {[
            { label: 'Avg Monthly Return', value: '1.35%',  color: 'var(--arb-success)' },
            { label: 'Annualised Return',  value: '16.2%',  color: 'var(--arb-acid)' },
            { label: '95% CI Lower',       value: '1.15%',  color: 'var(--arb-muted)' },
            { label: '95% CI Upper',       value: '1.55%',  color: 'var(--arb-muted)' },
            { label: 'Windows Tested',     value: '12',     color: 'var(--arb-cyan)' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--arb-dim)' }}>
                {s.label}
              </span>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '16px', fontWeight: 700, color: s.color, letterSpacing: '-0.01em' }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

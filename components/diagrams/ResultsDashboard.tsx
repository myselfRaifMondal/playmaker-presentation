import { performanceResults, resultMetrics, detectionAccuracy } from '@/data/presentation';

export default function ResultsDashboard() {
  const maxReturn = Math.max(...performanceResults.map((r) => Math.abs(r.annualReturn)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }} role="img" aria-label="Performance results dashboard showing headline metrics and comparison charts">

      {/* Headline metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {resultMetrics.map((m) => {
          const colorMap: Record<string, string> = {
            acid: 'var(--arb-acid)', success: 'var(--arb-success)', cyan: 'var(--arb-cyan)', warning: 'var(--arb-warning)',
          };
          const c = colorMap[m.color ?? 'text'] ?? 'var(--arb-text)';
          return (
            <div
              key={m.label}
              style={{
                background: 'var(--arb-surface)',
                border: '1px solid var(--arb-border)',
                borderRadius: '8px',
                padding: '16px 20px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-dim)', marginBottom: '6px' }}>
                {m.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '28px', fontWeight: 700, color: c, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {m.value}
                </span>
                {m.unit && (
                  <span style={{ fontFamily: 'var(--font-data)', fontSize: '12px', color: c, opacity: 0.6 }}>{m.unit}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Two comparison charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Annual Return by Method */}
        <div style={{ background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '8px', padding: '18px' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '14px' }}>
            Annual Return by Method
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {performanceResults.map((r) => {
              const pct = (r.annualReturn / (maxReturn + 2)) * 100;
              const isNeg = r.annualReturn < 0;
              const barColor = r.isProposed ? 'var(--arb-acid)' : isNeg ? 'var(--arb-danger)' : 'var(--arb-muted)';
              return (
                <div key={r.method}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: r.isProposed ? 'var(--arb-text)' : 'var(--arb-muted)' }}>
                      {r.method}
                    </span>
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', fontWeight: r.isProposed ? 700 : 400, color: barColor }}>
                      {r.annualReturn > 0 ? '+' : ''}{r.annualReturn}%
                    </span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(0,0,0,0.25)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${Math.abs(pct)}%`,
                        background: barColor,
                        opacity: r.isProposed ? 0.9 : 0.45,
                        borderRadius: '3px',
                        marginLeft: isNeg ? `${100 - Math.abs(pct)}%` : 0,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detection Accuracy */}
        <div style={{ background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '8px', padding: '18px' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '14px' }}>
            Detection Accuracy
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Overall TPR',   value: detectionAccuracy.tpr,       unit: '%', color: 'var(--arb-acid)',    desc: 'True Positive Rate' },
              { label: 'Precision',     value: detectionAccuracy.precision, unit: '%', color: 'var(--arb-success)', desc: 'Signal fidelity' },
              { label: 'False Positive Rate', value: detectionAccuracy.fpr, unit: '%', color: 'var(--arb-danger)',  desc: 'Noise rate', low: true },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: 'var(--arb-muted)' }}>{m.label}</span>
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)', marginLeft: '8px' }}>{m.desc}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700, color: m.color }}>
                    {m.value}{m.unit}
                  </span>
                </div>
                <div style={{ height: '5px', background: 'rgba(0,0,0,0.25)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${m.low ? m.value * 20 : m.value}%`,
                      background: m.color,
                      opacity: 0.7,
                      borderRadius: '3px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { latencyStages } from '@/data/presentation';

const TOTAL_BUDGET = 100; // µs
const STAGE_COLORS = [
  'var(--arb-cyan)',
  'var(--arb-purple)',
  'var(--arb-purple)',
  'var(--arb-purple)',
  'var(--arb-acid)',
  'var(--arb-success)',
];

export default function LatencyBudgetTimeline() {
  const totalDuration = latencyStages.reduce((s, st) => s + st.duration, 0); // 80µs
  let cumulative = 0;

  return (
    <div
      role="img"
      aria-label="Latency budget timeline showing 6 pipeline stages totalling 80µs against a 100µs target"
      style={{ width: '100%' }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)' }}>
          Execution Trace — Detection Pipeline
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {[
            { label: 'Target',    value: '<100µs', color: 'var(--arb-acid)' },
            { label: 'p99',       value: '62.7µs', color: 'var(--arb-cyan)' },
            { label: 'Max (volatile)', value: '142.6µs', color: 'var(--arb-warning)' },
          ].map((m) => (
            <div key={m.label} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)', letterSpacing: '0.06em' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700, color: m.color }}>{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline bar */}
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        {/* Background track */}
        <div
          style={{
            height: '8px',
            background: 'var(--arb-surface)',
            border: '1px solid var(--arb-border)',
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {latencyStages.map((stage, i) => (
            <div
              key={i}
              style={{
                width: `${(stage.duration / TOTAL_BUDGET) * 100}%`,
                background: STAGE_COLORS[i],
                opacity: 0.7,
                borderRight: i < latencyStages.length - 1 ? '1px solid rgba(7,8,7,0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Target threshold marker */}
        <div
          style={{
            position: 'absolute',
            top: '-6px',
            bottom: '-6px',
            left: '80%',
            width: '1px',
            background: 'var(--arb-acid)',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '80%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-data)',
            fontSize: '8px',
            color: 'var(--arb-acid)',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          100µs target
        </div>
      </div>

      {/* Stage rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
        {latencyStages.map((stage, i) => {
          const start = cumulative;
          cumulative += stage.duration;
          const end = cumulative;
          const pct = (stage.duration / TOTAL_BUDGET) * 100;
          const offsetPct = (start / TOTAL_BUDGET) * 100;

          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Stage name */}
              <div style={{ width: '140px', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: STAGE_COLORS[i] }}>
                  {stage.name}
                </span>
              </div>

              {/* Bar track */}
              <div style={{ flex: 1, height: '20px', position: 'relative', background: 'rgba(0,0,0,0.2)', borderRadius: '3px', border: '1px solid var(--arb-border)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: `${offsetPct}%`,
                    width: `${pct}%`,
                    background: `${STAGE_COLORS[i]}40`,
                    borderRadius: '2px',
                    borderLeft: `2px solid ${STAGE_COLORS[i]}`,
                  }}
                />
                {/* Timestamp labels */}
                <span style={{ position: 'absolute', left: `${offsetPct + 0.5}%`, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)' }}>
                  t+{start}µs
                </span>
                <span style={{ position: 'absolute', right: `${100 - offsetPct - pct + 0.5}%`, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)' }}>
                  t+{end}µs
                </span>
              </div>

              {/* Duration */}
              <div style={{ width: '46px', flexShrink: 0, textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', fontWeight: 600, color: STAGE_COLORS[i] }}>
                  {stage.duration}µs
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div
        style={{
          marginTop: '12px',
          paddingTop: '10px',
          borderTop: '1px solid var(--arb-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--arb-muted)' }}>
          Total (nominal)
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '22px', fontWeight: 700, color: 'var(--arb-acid)' }}>
            {totalDuration}µs
          </span>
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: 'var(--arb-success)' }}>
            {Math.round((totalDuration / TOTAL_BUDGET) * 100)}% of budget
          </span>
        </div>
      </div>
    </div>
  );
}

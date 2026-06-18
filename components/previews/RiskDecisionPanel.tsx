import StatusBadge from '@/components/ui/StatusBadge';

export default function RiskDecisionPanel() {
  const checks = [
    { label: 'Pre-Trade Validation', pass: true },
    { label: 'Exposure Limit',       pass: true },
    { label: 'Drawdown Gate',        pass: true },
    { label: 'Compliance Audit',     pass: true },
  ];

  return (
    <div style={{ padding: '12px 14px', borderTop: '1px solid var(--arb-border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span className="console-label">Risk Gate</span>
        <StatusBadge label="Execution Eligible" color="acid" small />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {checks.map((c) => (
          <div
            key={c.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4px 8px',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
              border: '1px solid var(--arb-border)',
            }}
          >
            <span className="console-label">{c.label}</span>
            <span
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '9px',
                color: c.pass ? 'var(--arb-success)' : 'var(--arb-danger)',
                letterSpacing: '0.06em',
              }}
            >
              {c.pass ? '✓ PASS' : '✗ FAIL'}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '10px',
          padding: '8px',
          background: 'rgba(215,255,95,0.05)',
          border: '1px solid rgba(215,255,95,0.2)',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="console-label">Detection Latency</span>
        <span style={{ fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700, color: 'var(--arb-acid)' }}>
          62.7 µs
        </span>
      </div>
    </div>
  );
}

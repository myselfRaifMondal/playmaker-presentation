export default function CandidateCyclePanel() {
  return (
    <div style={{ padding: '12px 14px', borderTop: '1px solid var(--arb-border)' }}>
      <div className="console-label" style={{ marginBottom: '10px' }}>Candidate Cycle</div>

      {/* Triangle visual */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '10px' }}>
        {['BTC', 'ETH', 'USDT', 'BTC'].map((token, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && (
              <svg width="18" height="10" style={{ margin: '0 2px' }}>
                <line x1="0" y1="5" x2="12" y2="5" stroke="var(--arb-acid)" strokeWidth="1" opacity="0.7" />
                <polygon points="10,2 18,5 10,8" fill="var(--arb-acid)" opacity="0.7" />
              </svg>
            )}
            <span
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '11px',
                fontWeight: 700,
                color: i === 0 || i === 3 ? 'var(--arb-acid)' : 'var(--arb-text)',
                background: 'var(--arb-surface-raised)',
                border: `1px solid ${i === 0 || i === 3 ? 'rgba(215,255,95,0.3)' : 'var(--arb-border)'}`,
                padding: '3px 7px',
                borderRadius: '4px',
              }}
            >
              {token}
            </span>
          </div>
        ))}
      </div>

      {/* Cost breakdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {[
          { label: 'Gross Spread',      value: '+0.412%', color: 'var(--arb-acid)' },
          { label: 'Trading Fees',      value: '−0.090%', color: 'var(--arb-warning)' },
          { label: 'Pred. Slippage',    value: '−0.047%', color: 'var(--arb-warning)' },
          { label: 'Latency Penalty',   value: '−0.003%', color: 'var(--arb-dim)' },
          { label: 'Net Expected Profit', value: '+0.272%', color: 'var(--arb-success)', bold: true },
        ].map((row) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: row.bold ? '4px 0 0 0' : '1px 0',
              borderTop: row.bold ? '1px solid var(--arb-border)' : 'none',
              marginTop: row.bold ? '2px' : 0,
            }}
          >
            <span className="console-label">{row.label}</span>
            <span
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: row.bold ? '13px' : '11px',
                fontWeight: row.bold ? 700 : 400,
                color: row.color,
              }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

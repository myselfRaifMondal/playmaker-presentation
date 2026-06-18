export default function ExecutionDecisionConsole() {
  const costRows = [
    { label: 'Detected Cycle',   value: 'BTC → ETH → USDT',   color: 'var(--arb-text)',    divider: false },
    { label: 'Gross Profit',     value: '+0.412%',              color: 'var(--arb-acid)',    divider: false },
    { label: 'Trading Fees',     value: '−0.090%',              color: 'var(--arb-warning)', divider: false },
    { label: 'Predicted Slippage', value: '−0.047%',            color: 'var(--arb-warning)', divider: false },
    { label: 'Latency Penalty',  value: '−0.003%',              color: 'var(--arb-dim)',     divider: false },
    { label: 'Net Profit',       value: '+0.272%',              color: 'var(--arb-success)', divider: true  },
  ];

  const slippageFactors = [
    { label: 'Order size vs. depth', icon: '▲' },
    { label: 'Bid-ask spread',       icon: '↔' },
    { label: 'Market volatility',    icon: '~' },
    { label: 'Exchange venue',       icon: '⌂' },
    { label: 'Available liquidity',  icon: '◈' },
  ];

  const riskChecks = [
    { label: 'Pre-Trade Validation',  pass: true },
    { label: 'Exposure Limits',       pass: true },
    { label: 'P&L Monitoring',        pass: true },
    { label: 'Drawdown Limit',        pass: true },
    { label: 'Compliance Audit',      pass: true },
  ];

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
      role="img"
      aria-label="Execution decision console showing cost calculation on the left and risk validation on the right"
    >
      {/* Left: Cost calculation */}
      <div style={{ background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '8px', padding: '20px' }}>
        <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '14px' }}>
          Cost-Aware Calculation
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
          {costRows.map((row, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '6px 0',
                borderTop: row.divider ? '1px solid var(--arb-border)' : 'none',
                marginTop: row.divider ? '4px' : 0,
              }}
            >
              <span className="console-label">{row.label}</span>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: row.divider ? '14px' : '12px', fontWeight: row.divider ? 700 : 400, color: row.color }}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--arb-border)', paddingTop: '14px' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '8px' }}>
            Slippage Predictors
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {slippageFactors.map((f) => (
              <div
                key={f.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 8px',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--arb-border)',
                  borderRadius: '4px',
                }}
              >
                <span style={{ fontSize: '9px', color: 'var(--arb-cyan)' }}>{f.icon}</span>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-muted)' }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Risk decision */}
      <div style={{ background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '8px', padding: '20px' }}>
        <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '14px' }}>
          Risk Gate Decision
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          {riskChecks.map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '7px 10px',
                background: 'rgba(0,0,0,0.2)',
                border: `1px solid ${c.pass ? 'rgba(111,227,161,0.15)' : 'rgba(255,92,92,0.15)'}`,
                borderRadius: '5px',
              }}
            >
              <span className="console-label">{c.label}</span>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: c.pass ? 'var(--arb-success)' : 'var(--arb-danger)', fontWeight: 600 }}>
                {c.pass ? '✓ PASS' : '✗ FAIL'}
              </span>
            </div>
          ))}
        </div>

        {/* Decision output */}
        <div
          style={{
            background: 'rgba(215,255,95,0.05)',
            border: '1px solid rgba(215,255,95,0.3)',
            borderRadius: '6px',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--arb-muted)' }}>
              Final Decision
            </span>
            <span
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--arb-acid)',
                background: 'rgba(215,255,95,0.08)',
                padding: '2px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(215,255,95,0.25)',
              }}
            >
              EXECUTE
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="console-label">Order Type</span>
            <span className="console-value" style={{ fontSize: '11px' }}>Atomic Multi-Leg</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="console-label">Execution Time</span>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: 'var(--arb-cyan)' }}>62.7µs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

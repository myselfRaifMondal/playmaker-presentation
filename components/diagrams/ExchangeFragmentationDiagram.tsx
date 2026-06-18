export default function ExchangeFragmentationDiagram() {
  const exchanges = [
    { name: 'Binance',  bids: [80, 60, 45, 30], asks: [35, 55, 70, 85], price: '43,218', x: 60 },
    { name: 'Kraken',   bids: [70, 50, 38, 22], asks: [28, 48, 62, 78], price: '43,241', x: 380 },
    { name: 'Coinbase', bids: [60, 44, 32, 20], asks: [24, 40, 56, 68], price: '43,229', x: 700 },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '320px', userSelect: 'none' }} role="img" aria-label="Exchange fragmentation diagram showing three exchanges with independent order books and a price mismatch event">
      <svg
        viewBox="0 0 960 320"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting lines to centre */}
        {exchanges.map((ex, i) => {
          const cx = ex.x + 110;
          return (
            <line
              key={i}
              x1={cx}
              y1={100}
              x2={480}
              y2={220}
              stroke="rgba(103,223,245,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Exchange nodes */}
        {exchanges.map((ex, i) => {
          const cx = ex.x;
          return (
            <g key={i}>
              {/* Panel */}
              <rect x={cx} y={0} width={220} height={130} rx="6" fill="var(--arb-surface)" stroke="var(--arb-border)" strokeWidth="1" />

              {/* Exchange name */}
              <text x={cx + 12} y={18} fill="var(--arb-cyan)" fontSize="10" fontFamily="var(--font-data)" letterSpacing="0.08em" textAnchor="start">{ex.name.toUpperCase()}</text>

              {/* Price */}
              <text x={cx + 12} y={38} fill="var(--arb-text)" fontSize="16" fontFamily="var(--font-data)" fontWeight="700">${ex.price}</text>

              {/* Order book bars — bids */}
              {ex.bids.map((w, j) => (
                <rect key={`bid-${j}`} x={cx + 10} y={52 + j * 14} width={w * 0.9} height={10} rx="1" fill="rgba(111,227,161,0.3)" />
              ))}
              {/* Order book bars — asks */}
              {ex.asks.map((w, j) => (
                <rect key={`ask-${j}`} x={cx + 115} y={52 + j * 14} width={w * 0.9} height={10} rx="1" fill="rgba(255,92,92,0.3)" />
              ))}

              {/* BID / ASK labels */}
              <text x={cx + 10} y={48} fill="rgba(111,227,161,0.6)" fontSize="8" fontFamily="var(--font-data)" letterSpacing="0.08em">BID</text>
              <text x={cx + 115} y={48} fill="rgba(255,92,92,0.6)" fontSize="8" fontFamily="var(--font-data)" letterSpacing="0.08em">ASK</text>
            </g>
          );
        })}

        {/* Central "Price Mismatch" event */}
        <rect x={380} y={195} width={200} height={60} rx="6" fill="rgba(242,184,75,0.06)" stroke="rgba(242,184,75,0.35)" strokeWidth="1" />
        <text x={480} y={218} fill="var(--arb-warning)" fontSize="10" fontFamily="var(--font-data)" letterSpacing="0.1em" textAnchor="middle">PRICE MISMATCH</text>
        <text x={480} y={236} fill="var(--arb-muted)" fontSize="9" fontFamily="var(--font-data)" textAnchor="middle">Δ23 pts across venues</text>
        <text x={480} y={252} fill="var(--arb-dim)" fontSize="8" fontFamily="var(--font-data)" textAnchor="middle">window: ~12ms</text>

        {/* Challenge labels */}
        {[
          { x: 100, label: 'SPEED',  sub: 'Sub-100µs required', color: 'var(--arb-cyan)' },
          { x: 420, label: 'COST',   sub: 'Fees erode margin',  color: 'var(--arb-warning)' },
          { x: 730, label: 'RISK',   sub: 'Execution uncertainty', color: 'var(--arb-danger)' },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={278} width={130} height={38} rx="4" fill="var(--arb-surface)" stroke="var(--arb-border)" strokeWidth="1" />
            <text x={c.x + 65} y={294} fill={c.color} fontSize="10" fontFamily="var(--font-data)" letterSpacing="0.12em" fontWeight="700" textAnchor="middle">{c.label}</text>
            <text x={c.x + 65} y={308} fill="var(--arb-dim)" fontSize="8" fontFamily="var(--font-data)" textAnchor="middle">{c.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

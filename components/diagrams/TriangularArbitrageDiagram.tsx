export default function TriangularArbitrageDiagram() {
  // Equilateral triangle vertices (cx=400, cy=200, r=140)
  const r = 130;
  const cx = 400;
  const cy = 195;
  const nodes = [
    { id: 'BTC',  x: cx,                   y: cy - r,        color: 'var(--arb-warning)' },
    { id: 'ETH',  x: cx - r * Math.sin(2 * Math.PI / 3), y: cy - r * Math.cos(2 * Math.PI / 3), color: 'var(--arb-purple)' },
    { id: 'USDT', x: cx + r * Math.sin(2 * Math.PI / 3), y: cy - r * Math.cos(2 * Math.PI / 3), color: 'var(--arb-cyan)' },
  ];

  const edges = [
    { from: 0, to: 1, rate: '0.06721 BTC/ETH', fee: '0.03%', label: 'Leg 1' },
    { from: 1, to: 2, rate: '2,901.2 ETH/USDT', fee: '0.03%', label: 'Leg 2' },
    { from: 2, to: 0, rate: '43,218 USDT/BTC',  fee: '0.04%', label: 'Leg 3' },
  ];

  const nr = 32; // node radius

  return (
    <div style={{ position: 'relative', width: '100%', height: '380px' }} role="img" aria-label="Triangular arbitrage cycle between BTC, ETH and USDT showing three trading legs with exchange rates, fees, and net profit calculation">
      <svg viewBox="0 0 800 380" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">

        {/* Edges */}
        {edges.map((e, i) => {
          const n1 = nodes[e.from];
          const n2 = nodes[e.to];
          const mx = (n1.x + n2.x) / 2;
          const my = (n1.y + n2.y) / 2;
          // Arrowhead calculation
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / len;
          const uy = dy / len;
          const sx = n1.x + ux * (nr + 4);
          const sy = n1.y + uy * (nr + 4);
          const ex2 = n2.x - ux * (nr + 10);
          const ey = n2.y - uy * (nr + 10);

          return (
            <g key={i}>
              <defs>
                <marker id={`arr-${i}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0,0 6,3 0,6" fill="var(--arb-acid)" opacity="0.8" />
                </marker>
              </defs>
              <line
                x1={sx} y1={sy} x2={ex2} y2={ey}
                stroke="var(--arb-acid)"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                markerEnd={`url(#arr-${i})`}
              />

              {/* Edge label box */}
              <rect x={mx - 55} y={my - 20} width={110} height={36} rx="4" fill="var(--arb-surface)" stroke="var(--arb-border)" strokeWidth="1" />
              <text x={mx} y={my - 7} fill="var(--arb-muted)" fontSize="8" fontFamily="var(--font-data)" letterSpacing="0.06em" textAnchor="middle">{e.label}</text>
              <text x={mx} y={my + 5} fill="var(--arb-text)" fontSize="9" fontFamily="var(--font-data)" textAnchor="middle">{e.rate}</text>
              <text x={mx} y={my + 15} fill="var(--arb-warning)" fontSize="8" fontFamily="var(--font-data)" textAnchor="middle">fee {e.fee}</text>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={nr + 4} fill={`${n.color}12`} stroke={n.color} strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r={nr} fill="var(--arb-surface)" stroke={n.color} strokeWidth="1.5" />
            <text x={n.x} y={n.y + 5} fill={n.color} fontSize="13" fontFamily="var(--font-data)" fontWeight="700" textAnchor="middle">{n.id}</text>
          </g>
        ))}

        {/* Net profit breakdown panel */}
        <rect x={316} y={145} width={168} height={100} rx="6" fill="rgba(7,8,7,0.85)" stroke="rgba(215,255,95,0.25)" strokeWidth="1" />
        {[
          { label: 'Gross Gain',   val: '+0.412%', color: 'var(--arb-acid)' },
          { label: '− Fees',       val: '−0.090%', color: 'var(--arb-warning)' },
          { label: '− Slippage',   val: '−0.047%', color: 'var(--arb-warning)' },
          { label: '− Latency',    val: '−0.003%', color: 'var(--arb-dim)' },
        ].map((row, i) => (
          <g key={i}>
            <text x={326} y={162 + i * 16} fill="var(--arb-muted)" fontSize="8" fontFamily="var(--font-data)">{row.label}</text>
            <text x={476} y={162 + i * 16} fill={row.color} fontSize="8" fontFamily="var(--font-data)" textAnchor="end">{row.val}</text>
          </g>
        ))}
        <line x1={322} y1={228} x2={478} y2={228} stroke="var(--arb-border)" strokeWidth="1" />
        <text x={326} y={242} fill="var(--arb-success)" fontSize="9" fontFamily="var(--font-data)" fontWeight="700">Net Expected Profit</text>
        <text x={476} y={242} fill="var(--arb-success)" fontSize="11" fontFamily="var(--font-data)" fontWeight="700" textAnchor="end">+0.272%</text>
      </svg>
    </div>
  );
}

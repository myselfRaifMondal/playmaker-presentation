export default function GraphDetectionConsole() {
  // Five currency nodes positioned in a rough pentagon
  const nodes = [
    { id: 'BTC',  x: 260, y: 50,  color: 'var(--arb-warning)', active: true  },
    { id: 'ETH',  x: 110, y: 160, color: 'var(--arb-purple)',  active: true  },
    { id: 'USDT', x: 410, y: 160, color: 'var(--arb-cyan)',    active: true  },
    { id: 'BNB',  x: 160, y: 290, color: 'var(--arb-muted)',   active: false },
    { id: 'SOL',  x: 360, y: 290, color: 'var(--arb-muted)',   active: false },
  ];

  const edges = [
    // Highlighted triangle cycle
    { from: 0, to: 1, highlight: true,  rate: '0.0672' },
    { from: 1, to: 2, highlight: true,  rate: '2901.2' },
    { from: 2, to: 0, highlight: true,  rate: '43218'  },
    // Inactive paths
    { from: 0, to: 3, highlight: false, rate: '0.0104' },
    { from: 1, to: 3, highlight: false, rate: '0.1542' },
    { from: 2, to: 4, highlight: false, rate: '107.3'  },
    { from: 3, to: 4, highlight: false, rate: '24.81'  },
    { from: 1, to: 4, highlight: false, rate: '95.1'   },
  ];

  const nr = 22;

  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Graph visual */}
      <div
        style={{ flex: '1 1 420px', minWidth: '320px' }}
        role="img"
        aria-label="Currency graph with five nodes (BTC, ETH, USDT, BNB, SOL) and directed weighted edges, with the BTC-ETH-USDT triangle highlighted as a profitable cycle"
      >
        <svg viewBox="0 0 520 350" style={{ width: '100%', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arr-h" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <polygon points="0,0 6,3 0,6" fill="var(--arb-acid)" opacity="0.9" />
            </marker>
            <marker id="arr-m" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <polygon points="0,0 6,3 0,6" fill="var(--arb-dim)" />
            </marker>
          </defs>

          {/* Edges */}
          {edges.map((e, i) => {
            const n1 = nodes[e.from];
            const n2 = nodes[e.to];
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const ux = dx / len;
            const uy = dy / len;
            const sx = n1.x + ux * (nr + 2);
            const sy = n1.y + uy * (nr + 2);
            const ex = n2.x - ux * (nr + 8);
            const ey = n2.y - uy * (nr + 8);
            const mx = (sx + ex) / 2;
            const my = (sy + ey) / 2;

            return (
              <g key={i}>
                <line
                  x1={sx} y1={sy} x2={ex} y2={ey}
                  stroke={e.highlight ? 'var(--arb-acid)' : 'var(--arb-dim)'}
                  strokeWidth={e.highlight ? 1.8 : 1}
                  strokeOpacity={e.highlight ? 0.85 : 0.35}
                  markerEnd={e.highlight ? 'url(#arr-h)' : 'url(#arr-m)'}
                />
                {e.highlight && (
                  <text x={mx} y={my - 5} fill="var(--arb-muted)" fontSize="8" fontFamily="var(--font-data)" textAnchor="middle">{e.rate}</text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => (
            <g key={n.id}>
              {n.active && (
                <circle cx={n.x} cy={n.y} r={nr + 6} fill={`${n.color}08`} stroke={n.color} strokeWidth="0.5" strokeOpacity="0.3" />
              )}
              <circle cx={n.x} cy={n.y} r={nr} fill="var(--arb-surface)" stroke={n.color} strokeWidth={n.active ? 1.5 : 0.8} strokeOpacity={n.active ? 1 : 0.35} />
              <text
                x={n.x} y={n.y + 5}
                fill={n.active ? n.color : 'var(--arb-dim)'}
                fontSize="11"
                fontFamily="var(--font-data)"
                fontWeight="700"
                textAnchor="middle"
              >
                {n.id}
              </text>
            </g>
          ))}

          {/* Highlighted cycle label */}
          <rect x={180} y={120} width={160} height={22} rx="4" fill="rgba(215,255,95,0.06)" stroke="rgba(215,255,95,0.2)" strokeWidth="1" />
          <text x={260} y={135} fill="var(--arb-acid)" fontSize="9" fontFamily="var(--font-data)" letterSpacing="0.1em" textAnchor="middle">PROFITABLE CYCLE</text>
        </svg>
      </div>

      {/* Stats side panel */}
      <div
        style={{
          flex: '0 0 220px',
          background: 'var(--arb-surface)',
          border: '1px solid var(--arb-border)',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '8px' }}>
            Detection Config
          </div>
          {[
            { label: 'Max Cycle Len', value: '3 hops' },
            { label: 'Graph Update',  value: 'Incremental' },
            { label: 'Evaluation',    value: 'Vectorised' },
            { label: 'Transform',     value: 'Log-space' },
          ].map((r) => (
            <div key={r.label} className="console-row" style={{ padding: '5px 0' }}>
              <span className="console-label">{r.label}</span>
              <span className="console-value" style={{ fontSize: '11px' }}>{r.value}</span>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-muted)', marginBottom: '8px' }}>
            Algorithm Comparison
          </div>
          {[
            { label: 'Bellman–Ford',   value: '>500µs', color: 'var(--arb-danger)' },
            { label: 'Our Optimised',  value: '<100µs', color: 'var(--arb-acid)' },
            { label: 'p99 Latency',    value: '62.7µs', color: 'var(--arb-success)' },
          ].map((r) => (
            <div key={r.label} className="console-row" style={{ padding: '5px 0' }}>
              <span className="console-label">{r.label}</span>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: r.color, fontWeight: 600 }}>{r.value}</span>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '8px', borderTop: '1px solid var(--arb-border)' }}>
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-dim)', lineHeight: 1.5 }}>
            Arbitrage = profitable cycle in directed graph with log-transformed edge weights
          </span>
        </div>
      </div>
    </div>
  );
}

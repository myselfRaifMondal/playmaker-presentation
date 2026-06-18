import StatusBadge from '@/components/ui/StatusBadge';

export default function SignalIntakePanel() {
  const feeds = [
    { exchange: 'Binance', pair: 'BTC/USDT', price: '43,218.40', latency: '8µs', ok: true },
    { exchange: 'Kraken',  pair: 'ETH/BTC',  price: '0.06721',   latency: '11µs', ok: true },
    { exchange: 'Coinbase',pair: 'ETH/USDT', price: '2,903.55',  latency: '14µs', ok: true },
  ];

  return (
    <div style={{ padding: '12px 14px' }}>
      <div className="console-label" style={{ marginBottom: '8px' }}>Market Data Feeds</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {feeds.map((f) => (
          <div
            key={f.exchange}
            style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr 1fr 36px',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 8px',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
              border: '1px solid var(--arb-border)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: 'var(--arb-cyan)' }}>
              {f.exchange}
            </span>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: 'var(--arb-muted)' }}>
              {f.pair}
            </span>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: 'var(--arb-text)' }}>
              {f.price}
            </span>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-dim)' }}>
              {f.latency}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

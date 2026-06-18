import { pipelineStages } from '@/data/presentation';

const colorMap: Record<string, string> = {
  cyan:    'var(--arb-cyan)',
  purple:  'var(--arb-purple)',
  warning: 'var(--arb-warning)',
  acid:    'var(--arb-acid)',
  danger:  'var(--arb-danger)',
  success: 'var(--arb-success)',
};

const statusDot: Record<string, string> = {
  active:  'var(--arb-success)',
  warning: 'var(--arb-warning)',
  gate:    'var(--arb-danger)',
  output:  'var(--arb-acid)',
};

export default function ArchitecturePipeline() {
  const mainFlow = pipelineStages.filter((s) => !['compliance'].includes(s.id));
  const compliance = pipelineStages.find((s) => s.id === 'compliance')!;

  return (
    <div
      role="img"
      aria-label="End-to-end architecture pipeline with 9 stages from market data ingestion through order execution to P&L reporting and compliance monitoring"
      style={{ width: '100%', overflowX: 'auto', paddingBottom: '8px' }}
    >
      {/* Main pipeline row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', minWidth: '860px' }}>
        {mainFlow.map((stage, i) => {
          const c = colorMap[stage.color ?? 'muted'] ?? 'var(--arb-muted)';
          const isRisk = stage.id === 'risk';
          return (
            <div key={stage.id} style={{ display: 'flex', alignItems: 'center', flex: i < mainFlow.length - 1 ? '1' : 'none' }}>
              {/* Stage card */}
              <div
                style={{
                  background: isRisk ? 'rgba(255,92,92,0.04)' : 'var(--arb-surface)',
                  border: `1px solid ${isRisk ? 'rgba(255,92,92,0.3)' : 'var(--arb-border)'}`,
                  borderRadius: '8px',
                  padding: '10px 12px',
                  minWidth: '86px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  position: 'relative',
                }}
              >
                {/* Status dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: statusDot[stage.status],
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-data)',
                      fontSize: '7px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: statusDot[stage.status],
                    }}
                  >
                    {stage.status}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: c,
                    lineHeight: 1.2,
                  }}
                >
                  {stage.shortName}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '8px',
                    color: 'var(--arb-dim)',
                    lineHeight: 1.3,
                  }}
                >
                  {stage.description}
                </span>
              </div>

              {/* Connector arrow */}
              {i < mainFlow.length - 1 && (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 2px', position: 'relative' }}>
                  <svg width="100%" height="12" style={{ overflow: 'visible', minWidth: '20px' }}>
                    <line x1="0" y1="6" x2="100%" y2="6" stroke="var(--arb-dim)" strokeWidth="1" />
                    <polygon points="calc(100% - 6),3 100%,6 calc(100% - 6),9" fill="var(--arb-dim)" />
                  </svg>

                  {/* Risk branch — drop compliance below between risk and exec */}
                  {stage.id === 'risk' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '8px',
                        zIndex: 2,
                      }}
                    >
                      <svg width="2" height="28">
                        <line x1="1" y1="0" x2="1" y2="28" stroke="var(--arb-border)" strokeWidth="1" strokeDasharray="3 2" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Compliance branch — below the Risk → Execute connector */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '28px', paddingRight: '0', minWidth: '860px' }}>
        <div
          style={{
            background: 'rgba(242,184,75,0.04)',
            border: '1px solid rgba(242,184,75,0.25)',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginRight: '90px',
          }}
        >
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: 'var(--arb-warning)',
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-data)', fontSize: '10px', color: 'var(--arb-warning)', fontWeight: 600 }}>
              Compliance Monitor
            </div>
            <div style={{ fontFamily: 'var(--font-data)', fontSize: '8px', color: 'var(--arb-dim)', marginTop: '2px' }}>
              Continuous audit trail
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '20px', flexWrap: 'wrap', minWidth: '860px' }}>
        {[
          { color: 'var(--arb-success)', label: 'Active module' },
          { color: 'var(--arb-danger)',  label: 'Gate (blocks if failed)' },
          { color: 'var(--arb-acid)',    label: 'Output stage' },
          { color: 'var(--arb-warning)', label: 'Monitoring branch' },
        ].map((l) => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: l.color, flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-muted)' }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

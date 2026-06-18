import type { Metric } from '@/types/presentation';

interface Props {
  metric: Metric;
  large?: boolean;
}

const colorMap: Record<string, string> = {
  acid:    'var(--arb-acid)',
  success: 'var(--arb-success)',
  danger:  'var(--arb-danger)',
  warning: 'var(--arb-warning)',
  cyan:    'var(--arb-cyan)',
  purple:  'var(--arb-purple)',
  text:    'var(--arb-text)',
};

export default function MetricCard({ metric, large = false }: Props) {
  const c = colorMap[metric.color ?? 'text'];
  return (
    <div
      style={{
        background: 'var(--arb-surface)',
        border: `1px solid var(--arb-border)`,
        borderRadius: '8px',
        padding: large ? '20px 24px' : '14px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-data)',
          fontSize: '9px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--arb-muted)',
        }}
      >
        {metric.label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-data)',
          fontSize: large ? '32px' : '22px',
          fontWeight: 700,
          color: c,
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {metric.value}
        {metric.unit && (
          <span style={{ fontSize: large ? '14px' : '11px', marginLeft: '2px', opacity: 0.7 }}>
            {metric.unit}
          </span>
        )}
      </span>
      {metric.context && (
        <span
          style={{
            fontFamily: 'var(--font-data)',
            fontSize: '9px',
            color: 'var(--arb-dim)',
            letterSpacing: '0.06em',
          }}
        >
          {metric.context}
        </span>
      )}
    </div>
  );
}

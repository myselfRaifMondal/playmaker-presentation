type StatusColor = 'acid' | 'success' | 'danger' | 'warning' | 'cyan' | 'purple' | 'muted';

interface Props {
  label: string;
  color?: StatusColor;
  dot?: boolean;
  small?: boolean;
}

const colorMap: Record<StatusColor, string> = {
  acid:    'var(--arb-acid)',
  success: 'var(--arb-success)',
  danger:  'var(--arb-danger)',
  warning: 'var(--arb-warning)',
  cyan:    'var(--arb-cyan)',
  purple:  'var(--arb-purple)',
  muted:   'var(--arb-muted)',
};

export default function StatusBadge({ label, color = 'muted', dot = true, small = false }: Props) {
  const c = colorMap[color];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: 'var(--font-data)',
        fontSize: small ? '9px' : '10px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: c,
        background: `${c}14`,
        border: `1px solid ${c}30`,
        borderRadius: '4px',
        padding: small ? '2px 6px' : '3px 8px',
      }}
    >
      {dot && (
        <span
          className="animate-pulse-dot"
          style={{ width: '5px', height: '5px', borderRadius: '50%', background: c, flexShrink: 0 }}
        />
      )}
      {label}
    </span>
  );
}

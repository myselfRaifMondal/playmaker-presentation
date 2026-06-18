interface Props {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function TechnicalLabel({ children, color, className = '' }: Props) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-data)',
        fontSize: '9px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: color ?? 'var(--arb-dim)',
      }}
    >
      {children}
    </span>
  );
}

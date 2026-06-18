interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}

export default function ConsolePanel({ title, children, className = '', headerRight }: Props) {
  return (
    <div className={`console-window ${className}`}>
      <div className="console-titlebar">
        <span className="traffic-light traffic-close" />
        <span className="traffic-light traffic-min" />
        <span className="traffic-light traffic-max" />
        <span
          style={{
            marginLeft: '8px',
            fontFamily: 'var(--font-data)',
            fontSize: '11px',
            color: 'var(--arb-muted)',
            letterSpacing: '0.06em',
            flex: 1,
          }}
        >
          {title}
        </span>
        {headerRight}
      </div>
      {children}
    </div>
  );
}

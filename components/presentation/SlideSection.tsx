interface Props {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export default function SlideSection({ id, children, className = '', style, ariaLabel }: Props) {
  return (
    <section
      id={id}
      className={`slide-section ${className}`}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

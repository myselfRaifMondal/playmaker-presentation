interface Props {
  children: React.ReactNode;
  slideNum?: string;
}

export default function SectionLabel({ children, slideNum }: Props) {
  return (
    <div className="section-label">
      {slideNum && (
        <span style={{ marginRight: '2px', color: 'var(--arb-dim)' }}>{slideNum}</span>
      )}
      {children}
    </div>
  );
}

import PresentationShell from '@/components/presentation/PresentationShell';
import SlideSection from '@/components/presentation/SlideSection';
import HeroBackdrop from '@/components/backgrounds/HeroBackdrop';
import SlideBackdrop from '@/components/backgrounds/SlideBackdrop';
import ArbitrageConsolePreview from '@/components/previews/ArbitrageConsolePreview';
import ExchangeFragmentationDiagram from '@/components/diagrams/ExchangeFragmentationDiagram';
import TriangularArbitrageDiagram from '@/components/diagrams/TriangularArbitrageDiagram';
import ArchitecturePipeline from '@/components/diagrams/ArchitecturePipeline';
import GraphDetectionConsole from '@/components/diagrams/GraphDetectionConsole';
import LatencyBudgetTimeline from '@/components/diagrams/LatencyBudgetTimeline';
import ExecutionDecisionConsole from '@/components/diagrams/ExecutionDecisionConsole';
import WalkForwardValidationView from '@/components/diagrams/WalkForwardValidationView';
import ResultsDashboard from '@/components/diagrams/ResultsDashboard';
import SectionLabel from '@/components/ui/SectionLabel';
import StatusBadge from '@/components/ui/StatusBadge';
import { heroMetrics, authors, futureDirections } from '@/data/presentation';

export default function Home() {
  return (
    <PresentationShell>

      {/* ── SLIDE 1: HERO ── */}
      <SlideSection id="slide-1" ariaLabel="Slide 1: Real-Time Arbitrage System – Hero">
        <HeroBackdrop />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: '40px', padding: '48px 64px 64px', alignItems: 'center' }}>

          {/* Left: narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="animate-fade-in">
              <SectionLabel slideNum="01">Research Presentation</SectionLabel>
            </div>

            <div className="animate-fade-in delay-100">
              <h1 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--arb-text)' }}>
                Real-Time<br />
                <span style={{ color: 'var(--arb-acid)' }}>Arbitrage</span><br />
                System
              </h1>
              <p className="font-display" style={{ fontSize: 'clamp(14px, 1.8vw, 22px)', color: 'var(--arb-muted)', marginTop: '4px', letterSpacing: '-0.01em' }}>
                in Financial Markets
              </p>
            </div>

            <p className="font-sans animate-fade-in delay-200" style={{ fontSize: '14px', color: 'var(--arb-muted)', lineHeight: 1.65, maxWidth: '380px' }}>
              A latency-aware framework for detecting triangular arbitrage opportunities in decentralised cryptocurrency markets.
            </p>

            {/* Metrics */}
            <div className="animate-fade-in delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {heroMetrics.map((m) => {
                const colorMap: Record<string, string> = { acid: 'var(--arb-acid)', success: 'var(--arb-success)', cyan: 'var(--arb-cyan)' };
                const c = colorMap[m.color ?? 'text'] ?? 'var(--arb-text)';
                return (
                  <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 14px', background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-data)', fontSize: '22px', fontWeight: 700, color: c, minWidth: '72px', letterSpacing: '-0.02em' }}>
                      {m.value}{m.unit}
                    </span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-dim)' }}>{m.label}</div>
                      <div style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-muted)' }}>{m.context}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Authors */}
            <div className="animate-fade-in delay-400" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-dim)' }}>Authors</span>
              {authors.map((a) => (
                <span key={a} className="font-sans" style={{ fontSize: '13px', color: 'var(--arb-muted)' }}>{a}</span>
              ))}
            </div>
          </div>

          {/* Right: console */}
          <div className="animate-fade-in delay-200" style={{ width: '100%', maxWidth: '520px', marginLeft: 'auto' }}>
            <ArbitrageConsolePreview />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 2: MARKET PROBLEM ── */}
      <SlideSection id="slide-2" ariaLabel="Slide 2: Market Problem">
        <SlideBackdrop accentColor="rgba(103,223,245,0.04)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', padding: '48px 64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionLabel slideNum="02">Market Problem</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Fragmented Markets,<br /><span style={{ color: 'var(--arb-cyan)' }}>Fleeting Opportunity</span>
            </h2>
            <div className="font-sans" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Cryptocurrency markets are fragmented across independent exchanges — each with its own liquidity, fees, and order book.',
                'Temporary price mismatches arise and vanish within milliseconds.',
                'Slow systems miss the opportunity. Theoretical profit disappears after fees and slippage.',
              ].map((t, i) => (
                <p key={i} style={{ fontSize: '14px', color: 'var(--arb-muted)', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '2px solid var(--arb-border)' }}>
                  {t}
                </p>
              ))}
            </div>
          </div>
          <ExchangeFragmentationDiagram />
        </div>
      </SlideSection>

      {/* ── SLIDE 3: TRIANGULAR ARBITRAGE ── */}
      <SlideSection id="slide-3" ariaLabel="Slide 3: Triangular Arbitrage">
        <SlideBackdrop accentColor="rgba(215,255,95,0.03)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px', padding: '48px 64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionLabel slideNum="03">Detection Principle</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Triangular<br /><span style={{ color: 'var(--arb-acid)' }}>Arbitrage</span>
            </h2>
            <div style={{ fontFamily: 'var(--font-data)', fontSize: '12px', color: 'var(--arb-muted)', background: 'var(--arb-surface)', border: '1px solid var(--arb-border)', borderRadius: '6px', padding: '12px 16px', lineHeight: 2 }}>
              Start asset → Pair 1 → Pair 2 → Pair 3 → Start asset
            </div>
            <p className="font-sans" style={{ fontSize: '14px', color: 'var(--arb-muted)', lineHeight: 1.65 }}>
              Exploit price inconsistencies across three trading pairs on the same or different exchanges. Profitability is determined only after subtracting all transaction costs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Gross gain', color: 'var(--arb-acid)' },
                { label: '− Trading fees', color: 'var(--arb-warning)' },
                { label: '− Predicted slippage', color: 'var(--arb-warning)' },
                { label: '− Latency penalty', color: 'var(--arb-dim)' },
                { label: '= Net expected profit', color: 'var(--arb-success)', bold: true },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: r.color, fontWeight: r.bold ? 700 : 400 }}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <TriangularArbitrageDiagram />
        </div>
      </SlideSection>

      {/* ── SLIDE 4: ARCHITECTURE ── */}
      <SlideSection id="slide-4" ariaLabel="Slide 4: End-to-End System Architecture">
        <SlideBackdrop accentColor="rgba(180,144,255,0.035)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '28px', padding: '48px 64px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <SectionLabel slideNum="04">System Architecture</SectionLabel>
              <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '8px' }}>
                End-to-End <span style={{ color: 'var(--arb-purple)' }}>Pipeline</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <StatusBadge label="9 Modules" color="purple" dot={false} small />
              <StatusBadge label="Risk-Gated" color="danger" dot={false} small />
              <StatusBadge label="Compliance Audited" color="warning" dot={false} small />
            </div>
          </div>
          <p className="font-sans" style={{ fontSize: '13px', color: 'var(--arb-muted)', maxWidth: '560px' }}>
            Execution cannot proceed unless cost-adjusted profit is positive, exposure limits pass, and all risk checks are satisfied.
          </p>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <ArchitecturePipeline />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 5: DETECTION ENGINE ── */}
      <SlideSection id="slide-5" ariaLabel="Slide 5: Graph-Based Detection Engine">
        <SlideBackdrop accentColor="rgba(180,144,255,0.04)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 64px' }}>
          <div>
            <SectionLabel slideNum="05">Detection Engine</SectionLabel>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '8px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Graph-Theoretic <span style={{ color: 'var(--arb-purple)' }}>Search</span>
              </h2>
              <p className="font-sans" style={{ fontSize: '13px', color: 'var(--arb-muted)', maxWidth: '420px' }}>
                Currencies are nodes; exchange pairs are directed edges with log-transformed weights. Arbitrage appears as a profitable cycle — prioritising short cycles for speed.
              </p>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <GraphDetectionConsole />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 6: LATENCY BUDGET ── */}
      <SlideSection id="slide-6" ariaLabel="Slide 6: Latency Budget">
        <SlideBackdrop accentColor="rgba(103,223,245,0.04)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 64px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <SectionLabel slideNum="06">Performance</SectionLabel>
              <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '8px' }}>
                Latency <span style={{ color: 'var(--arb-cyan)' }}>Budget</span>
              </h2>
            </div>
            <p className="font-sans" style={{ fontSize: '13px', color: 'var(--arb-muted)', maxWidth: '380px' }}>
              Deterministic execution trace from market data ingestion to cycle output — measured at every stage.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <LatencyBudgetTimeline />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 7: COST-AWARE EXECUTION ── */}
      <SlideSection id="slide-7" ariaLabel="Slide 7: Cost-Aware Execution">
        <SlideBackdrop accentColor="rgba(242,184,75,0.03)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 64px' }}>
          <div>
            <SectionLabel slideNum="07">Execution</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '8px' }}>
              Cost-Aware <span style={{ color: 'var(--arb-warning)' }}>Execution</span>
            </h2>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <ExecutionDecisionConsole />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 8: VALIDATION ── */}
      <SlideSection id="slide-8" ariaLabel="Slide 8: Walk-Forward Validation">
        <SlideBackdrop accentColor="rgba(111,227,161,0.035)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 64px' }}>
          <div>
            <SectionLabel slideNum="08">Validation</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '8px' }}>
              Walk-Forward <span style={{ color: 'var(--arb-success)' }}>Framework</span>
            </h2>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <WalkForwardValidationView />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 9: RESULTS ── */}
      <SlideSection id="slide-9" ariaLabel="Slide 9: Performance Results">
        <SlideBackdrop accentColor="rgba(215,255,95,0.03)" />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 64px' }}>
          <div>
            <SectionLabel slideNum="09">Results</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '8px' }}>
              Performance <span style={{ color: 'var(--arb-acid)' }}>Results</span>
            </h2>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <ResultsDashboard />
          </div>
        </div>
      </SlideSection>

      {/* ── SLIDE 10: CONCLUSION ── */}
      <SlideSection id="slide-10" ariaLabel="Slide 10: Conclusion and Q&A">
        <HeroBackdrop />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '48px 64px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <SectionLabel slideNum="10">Conclusion</SectionLabel>
            <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.8vw, 42px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Speed +<br />
              <span style={{ color: 'var(--arb-acid)' }}>Cost Awareness</span><br />
              + Risk Controls
            </h2>
            <p className="font-sans" style={{ fontSize: '14px', color: 'var(--arb-muted)', lineHeight: 1.65, maxWidth: '400px' }}>
              Successful arbitrage requires more than finding a graph cycle. It requires low-latency infrastructure, accurate transaction-cost estimation, robust risk controls, reliable execution, and continuous monitoring.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--arb-dim)', marginBottom: '6px' }}>
                Future Directions
              </span>
              {futureDirections.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--arb-acid)', opacity: 0.6, flexShrink: 0 }} />
                  <span className="font-sans" style={{ fontSize: '12px', color: 'var(--arb-muted)' }}>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '8px', padding: '12px 16px', background: 'rgba(215,255,95,0.05)', border: '1px solid rgba(215,255,95,0.15)', borderRadius: '6px' }}>
              <p className="font-editorial" style={{ fontSize: '13px', color: 'var(--arb-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                "Foundation for Low-Latency Quantitative Finance Systems"
              </p>
            </div>
          </div>

          {/* Q&A panel */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(64px, 9vw, 120px)',
                fontWeight: 700,
                letterSpacing: '-0.05em',
                lineHeight: 1,
                color: 'var(--arb-surface-raised)',
                userSelect: 'none',
                textTransform: 'uppercase',
              }}
            >
              Q&A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              {authors.map((a) => (
                <span key={a} className="font-sans" style={{ fontSize: '13px', color: 'var(--arb-muted)' }}>{a}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <StatusBadge label="15.2% Annual Return" color="acid" dot={false} small />
              <StatusBadge label="99.41% TPR" color="success" dot={false} small />
              <StatusBadge label="<100µs" color="cyan" dot={false} small />
            </div>
          </div>
        </div>
      </SlideSection>

    </PresentationShell>
  );
}

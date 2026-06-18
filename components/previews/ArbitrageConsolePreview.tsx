import ConsolePanel from '@/components/ui/ConsolePanel';
import StatusBadge from '@/components/ui/StatusBadge';
import SignalIntakePanel from './SignalIntakePanel';
import CandidateCyclePanel from './CandidateCyclePanel';
import RiskDecisionPanel from './RiskDecisionPanel';

export default function ArbitrageConsolePreview() {
  return (
    <ConsolePanel
      title="Arbitrage Console"
      headerRight={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span
              className="animate-pulse-dot"
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--arb-success)' }}
            />
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-success)', letterSpacing: '0.08em' }}>
              LIVE
            </span>
          </span>
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '9px', color: 'var(--arb-dim)' }}>
            v2.4.1
          </span>
        </div>
      }
    >
      <SignalIntakePanel />
      <CandidateCyclePanel />
      <RiskDecisionPanel />
    </ConsolePanel>
  );
}

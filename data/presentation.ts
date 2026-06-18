import type {
  SlideData,
  Metric,
  PipelineStage,
  LatencyStage,
  PerformanceResult,
  ValidationWindow,
} from '@/types/presentation';

export const slides: SlideData[] = [
  { id: 1, slug: 'slide-1', title: 'Hero' },
  { id: 2, slug: 'slide-2', title: 'Market Problem' },
  { id: 3, slug: 'slide-3', title: 'Triangular Arbitrage' },
  { id: 4, slug: 'slide-4', title: 'System Architecture' },
  { id: 5, slug: 'slide-5', title: 'Detection Engine' },
  { id: 6, slug: 'slide-6', title: 'Latency Budget' },
  { id: 7, slug: 'slide-7', title: 'Cost-Aware Execution' },
  { id: 8, slug: 'slide-8', title: 'Validation Framework' },
  { id: 9, slug: 'slide-9', title: 'Performance Results' },
  { id: 10, slug: 'slide-10', title: 'Conclusion' },
];

export const heroMetrics: Metric[] = [
  { label: 'Latency Target', value: '<100', unit: 'µs', color: 'cyan', context: 'end-to-end detection' },
  { label: 'True Positive Rate', value: '99.41', unit: '%', color: 'acid', context: 'overall detection accuracy' },
  { label: 'Annual Return', value: '15.2', unit: '%', color: 'success', context: 'walk-forward validated' },
];

export const pipelineStages: PipelineStage[] = [
  { id: 'ingest', name: 'Market Data Ingestion', shortName: 'Ingestion', status: 'active', description: 'WebSocket feeds from exchanges', color: 'cyan' },
  { id: 'graph', name: 'Graph Weight Update', shortName: 'Graph Update', status: 'active', description: 'Log-transform edge weights', color: 'purple' },
  { id: 'detect', name: 'Cycle Detection', shortName: 'Detection', status: 'active', description: 'Optimised triangle search', color: 'purple' },
  { id: 'slippage', name: 'Slippage Prediction', shortName: 'Slippage', status: 'active', description: 'ML-based cost estimation', color: 'warning' },
  { id: 'filter', name: 'Profitability Filter', shortName: 'Filter', status: 'active', description: 'Net profit after all costs', color: 'acid' },
  { id: 'risk', name: 'Risk Gate', shortName: 'Risk', status: 'gate', description: 'Exposure & drawdown limits', color: 'danger' },
  { id: 'exec', name: 'Order Execution', shortName: 'Execute', status: 'active', description: 'Atomic multi-leg orders', color: 'success' },
  { id: 'pnl', name: 'P&L Reporting', shortName: 'P&L', status: 'output', description: 'Real-time performance tracking', color: 'acid' },
  { id: 'compliance', name: 'Compliance Monitoring', shortName: 'Compliance', status: 'gate', description: 'Continuous audit trail', color: 'warning' },
];

export const latencyStages: LatencyStage[] = [
  { name: 'Market Data Ingestion', shortName: 'Ingestion', duration: 10, color: 'var(--arb-cyan)' },
  { name: 'Graph Weight Update', shortName: 'Graph', duration: 5, color: 'var(--arb-purple)' },
  { name: 'Triangle Search', shortName: 'Triangle', duration: 20, color: 'var(--arb-purple)' },
  { name: 'Deeper Cycle Search', shortName: 'Deep Cycle', duration: 30, color: 'var(--arb-purple)' },
  { name: 'Profitability Filter', shortName: 'Filter', duration: 10, color: 'var(--arb-acid)' },
  { name: 'Cycle Output', shortName: 'Output', duration: 5, color: 'var(--arb-success)' },
];

export const performanceResults: PerformanceResult[] = [
  { method: 'Proposed System', annualReturn: 15.2, isProposed: true },
  { method: 'Threshold Baseline', annualReturn: 8.7 },
  { method: 'Bellman–Ford Baseline', annualReturn: 4.2 },
  { method: 'Random Baseline', annualReturn: -2.3 },
];

export const validationWindows: ValidationWindow[] = Array.from({ length: 12 }, (_, i) => ({
  index: i,
  trainStart: i * 30,
  trainEnd: i * 30 + 90,
  embargoEnd: i * 30 + 97,
  testEnd: i * 30 + 127,
  monthlyReturn: 1.35 + (Math.sin(i * 0.8) * 0.3 + Math.cos(i * 0.5) * 0.15),
}));

export const resultMetrics: Metric[] = [
  { label: 'Annual Return', value: '15.2', unit: '%', color: 'acid' },
  { label: 'Sharpe Ratio', value: '2.34', color: 'success' },
  { label: 'Win Rate', value: '62.3', unit: '%', color: 'cyan' },
  { label: 'Max Drawdown', value: '5.2', unit: '%', color: 'warning' },
];

export const detectionAccuracy = {
  tpr: 99.41,
  precision: 99.82,
  fpr: 0.18,
};

export const authors = [
  'Raif Salauddin Mondal',
  'Animesh Kumar Singh',
];

export const futureDirections = [
  'Live exchange testing with real capital',
  'Partial-fill handling & order management',
  'Exchange outage recovery protocols',
  'Multi-leg cross-exchange strategies',
  'Adaptive slippage models',
  'Regulatory & compliance layer',
];

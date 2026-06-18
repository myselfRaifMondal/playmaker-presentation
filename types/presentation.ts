export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  context?: string;
  color?: 'acid' | 'success' | 'cyan' | 'purple' | 'warning' | 'danger' | 'text';
}

export interface PipelineStage {
  id: string;
  name: string;
  shortName: string;
  status: 'active' | 'warning' | 'gate' | 'output';
  description: string;
  color?: string;
}

export interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  active?: boolean;
}

export interface GraphEdge {
  from: string;
  to: string;
  rate: string;
  fee?: string;
  highlight?: boolean;
}

export interface LatencyStage {
  name: string;
  shortName: string;
  duration: number; // µs
  color: string;
}

export interface PerformanceResult {
  method: string;
  annualReturn: number;
  isProposed?: boolean;
}

export interface ValidationWindow {
  index: number;
  trainStart: number;
  trainEnd: number;
  embargoEnd: number;
  testEnd: number;
  monthlyReturn: number;
}

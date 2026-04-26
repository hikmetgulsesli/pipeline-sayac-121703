export interface CounterState {
  value: number;
  step: number;
  min: number;
  max: number;
}

export interface CounterHistoryEntry {
  previousValue: number;
  newValue: number;
  action: 'increment' | 'decrement' | 'reset' | 'add';
  timestamp: string;
}

export type TabId = 'counter' | 'history' | 'settings';

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  add: (value: number) => void;
}

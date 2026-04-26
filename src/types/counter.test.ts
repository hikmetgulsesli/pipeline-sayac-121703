import { describe, it, expect } from 'vitest';
import type { CounterState, CounterHistoryEntry, TabId, UseCounterReturn } from './counter';

describe('counter types', () => {
  it('CounterState has required fields', () => {
    const state: CounterState = {
      value: 0,
      step: 1,
      min: -100,
      max: 100,
    };
    expect(state.value).toBe(0);
    expect(state.step).toBe(1);
    expect(state.min).toBe(-100);
    expect(state.max).toBe(100);
  });

  it('CounterHistoryEntry has required fields', () => {
    const entry: CounterHistoryEntry = {
      previousValue: 0,
      newValue: 5,
      action: 'add',
      timestamp: new Date().toISOString(),
    };
    expect(entry.previousValue).toBe(0);
    expect(entry.newValue).toBe(5);
    expect(entry.action).toBe('add');
  });

  it('TabId accepts valid values', () => {
    const tabs: TabId[] = ['counter', 'history', 'settings'];
    expect(tabs).toContain('counter');
    expect(tabs).toContain('history');
    expect(tabs).toContain('settings');
  });

  it('UseCounterReturn has required methods', () => {
    const mock: UseCounterReturn = {
      count: 42,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
      add: (_value: number) => {},
    };
    expect(mock.count).toBe(42);
    expect(typeof mock.increment).toBe('function');
    expect(typeof mock.decrement).toBe('function');
    expect(typeof mock.reset).toBe('function');
    expect(typeof mock.add).toBe('function');
  });
});

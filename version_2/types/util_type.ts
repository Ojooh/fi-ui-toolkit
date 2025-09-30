export type LoggerType = 'log' | 'info' | 'warn' | 'error' | 'debug';

export interface LoggerOptions {
  prefix?: string;
  show_timestamp?: boolean;
}
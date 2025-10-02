export type LoggerType = 'log' | 'info' | 'warn' | 'error' | 'debug';

export type ContentObjectType = Record<string, any>;

export interface LoggerOptions {
  prefix?: string;
  show_timestamp?: boolean;
}

export interface EncryptedV2Interface {
  encrypted_data: string;
}


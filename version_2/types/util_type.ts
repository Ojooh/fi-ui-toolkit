export type LoggerType = 'log' | 'info' | 'warn' | 'error' | 'debug';

export type ContentObjectType = Record<string, any>;

export interface LoggerOptions {
	prefix?: string;
	show_timestamp?: boolean;
}

export interface EncryptedV2Interface {
	encrypted_data: string;
}

export interface CurrentMemberInterface {
	public_id: string,
	first_name: string,
	last_name: string,
	is_fully_authenticated: boolean;
	[key: string]: any
}

export interface OtherMemberDataInterface {
	[key: string]: any
}


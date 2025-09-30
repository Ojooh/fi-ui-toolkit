export interface ENVInterface {
    readonly VITE_MODE?: 'development' | 'production' | 'test';
    [key: string]: any;
}

export interface ImportMeta {
    readonly env: ENVInterface;
}
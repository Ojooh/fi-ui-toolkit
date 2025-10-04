

export type ENVValue = string | number | boolean | Record<string, unknown>;

export interface ENVInterface {
    readonly VITE_MODE?: "development" | "production" | "test" | "staging";
    readonly VITE_ENCRYPT_V1_SECRET_KEY?: string;
    [key: string]: any;
}

export interface ImportMeta {
    readonly env: ENVInterface;
}
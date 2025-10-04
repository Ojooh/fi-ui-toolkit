import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { InternalAxiosRequestConfig } from "axios";

import LocalStorageManagerUtil      from "../utils/local_storage_manager_util";
import GlobalVariableManagerUtil    from "../utils/global_variable_manager_util";
import LoggerUtil                   from "../utils/logger_util";
import DeviceFingerprintUtil        from "../utils/device_fingerprint_util";

import { ENVInterface }             from "../types/env_type";
import { APIResponseInterface }     from "../types/util_type";

class BaseAPIService {
    public readonly name = "base_api_service";
    private api_base_url = "";
    private api_instance: AxiosInstance;
    private refresh_timer: ReturnType<typeof setInterval> | null = null;
    private ENV: ENVInterface

    private is_production: boolean;
    private is_staging: boolean;

    private logger: LoggerUtil;
    private global_vars: GlobalVariableManagerUtil;
    private local_storage_manager: LocalStorageManagerUtil;
    private device_util: DeviceFingerprintUtil;

    constructor() {
        this.global_vars            = GlobalVariableManagerUtil.getInstance();
        this.ENV                    = this.global_vars.getVariable("ENV");
        this.is_production          = this.ENV?.VITE_MODE === "production";
        this.is_staging             = this.ENV?.VITE_MODE === "staging";

        this.local_storage_manager  = new LocalStorageManagerUtil();
        this.device_util            = new DeviceFingerprintUtil();
        this.logger                 = new LoggerUtil({ prefix: this.name, show_timestamp: false });
        this.api_instance           = this.createAxiosInstance();

        this.attachInterceptors();
    }

    // Method to get local storage keys
    protected getStorageKeys() {
        return {
            ACCESS_TOKEN_KEY: "ACCESS_TOKEN",
            DEVICE_ID_KEY: "DEVICE_ID",
            DEVICE_NAME_KEY: "DEVICE_NAME"
        };
    }

    // Method to Create Axios Instance
    private createAxiosInstance(): AxiosInstance {
        if (window.origin.includes("localhost") || window.origin.includes("127.0.0.1")) {
            this.api_base_url = `${this.ENV.VITE_API_BASE_URL_TEST}`;
        } 
        else if (this.is_production) {
            this.api_base_url = `${this.ENV.VITE_API_BASE_URL_LIVE}`;
        } 
        else if (this.is_staging) {
            this.api_base_url = `${this.ENV.VITE_API_BASE_URL_TEST}`;
        }

        return axios.create({ baseURL: this.api_base_url, withCredentials: true, timeout: 100_000 });
    }

    // Method to Get device headers, store if not present
    private getDeviceHeaders(): { device_id: string | null; device_name: string } {
        const { DEVICE_ID_KEY, DEVICE_NAME_KEY } = this.getStorageKeys();

        let device_id = this.local_storage_manager.getData<string>(DEVICE_ID_KEY);
        let device_name = this.local_storage_manager.getData<string>(DEVICE_NAME_KEY);

        if (!device_id || !device_name) {
            device_id = this.device_util.generateFingerprint();
            device_name = this.device_util.getDeviceName();

            this.local_storage_manager.setData(DEVICE_ID_KEY, device_id);
            this.local_storage_manager.setData(DEVICE_NAME_KEY, device_name);
        }

        return { device_id, device_name };
    }

    // Method to Attach Interceptors */
    private attachInterceptors(): void {
        this.api_instance.interceptors.request.use((config: InternalAxiosRequestConfig) => this.setHeaders(config));
    }

    // Method to Add headers (device ID, device name, token)
    private setHeaders(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        try {
            config.headers = config.headers ?? {};

            const { device_id, device_name }    = this.getDeviceHeaders();
            const { ACCESS_TOKEN_KEY }          = this.getStorageKeys();

            if (device_id && device_name) {
                config.headers["x-device-id"] = device_id;
                config.headers["x-device-name"] = device_name;
            }

            // Add auth token if available
            const token = this.local_storage_manager.getData<string>(ACCESS_TOKEN_KEY);

            if (token) { config.headers["Authorization"] = `Bearer ${token}`; }

            return config;
        } 
        catch (error) {
            this.logger.error("Failed setting request headers", { error });
            throw error;
        }
    }

    // Method to Extract and store access token if present */
    private handleTokenFromResponse(data: any): void {
        const { ACCESS_TOKEN_KEY } = this.getStorageKeys();

        if (data?.access_token) {
            this.local_storage_manager.setData(ACCESS_TOKEN_KEY, data.access_token);
            this.startTokenRefreshTimer();
        }
    }

    /** Auto-refresh access token every 4 minutes */
    private startTokenRefreshTimer(): void {
        if (this.refresh_timer) { clearInterval(this.refresh_timer); }

        this.refresh_timer = setInterval(async () => {
            try {
                await this.queryAPI({ url: "/auth/refresh", method: "POST" });
                this.logger.log("✅ Access token refreshed automatically");
            } 
            catch (error) {
                this.logger.error("❌ Token refresh failed", { error });
            }
        }, 4 * 60 * 1000); // 4 minutes
    }

    // Method to Query API with standard error handling
    public async queryAPI<T = any>(config: AxiosRequestConfig): Promise<APIResponseInterface<T>> {
        try {
            const response              = await this.api_instance.request<T>(config);
            const { status, msg, data } = response.data as any;

            // Check token refresh
            this.handleTokenFromResponse(data);

            return { status, msg, data, full_response: response };
        } 
        catch (error: any) {
            const status_code   = error?.response?.status;
            const error_msg     = error?.response?.data?.msg || error.message || "invalid_request";

            if (status_code === 401 || status_code === 429) {
                return { status: "logout", msg: error_msg, full_response: error?.response };
            }

            this.logger.error("API Error", { error });
            return { status: "error", msg: error_msg, full_response: error?.response };
        }
    }

}

export default BaseAPIService;
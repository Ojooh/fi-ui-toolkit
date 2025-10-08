import { AxiosRequestConfig } from "axios";
import { APIResponseInterface } from "./util_type";

export interface BaseAPIServiceInterface {
    queryAPI<T = any>(config: AxiosRequestConfig): Promise<APIResponseInterface<T>>;
}
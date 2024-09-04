import axios, { AxiosError } from "axios";

import { message } from "../utils/AntdGlobal";

import { hideLoading, showLoading } from "../utils/Loading";
import storage from "../utils/storage";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 8000,
    timeoutErrorMessage: "请求超时，请稍后在尝试",
    withCredentials: true,
    headers: {
        icode: "DD38285E688BDC12",
    },
});

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        if (import.meta.env.VITE_MOCK === "true") {
            config.baseURL = import.meta.env.VITE_MOCK_API;
        } else {
            config.baseURL = import.meta.env.VITE_BASE_URL;
        }
        if (config.showLoading) showLoading();
        const token = storage.get("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (err: AxiosError) => {
        message.error(err.message);
        return Promise.reject(err);
    }
);
//响应拦截器
instance.interceptors.response.use(
    (res) => {
        hideLoading();
        const { data, msg, code } = res.data;
        if (code === 500001) {
            message.error(msg);
            storage.remove("token");
            location.href = "/login";
        } else if (code != 0) {
            if (res.config.showError) {
                message.error(msg);
                return Promise.reject(res.data);
            } else {
                return Promise.resolve(res.data);
            }
        }
        return data;
    },
    (err: AxiosError) => {
        hideLoading();
        message.error(err.message);
        return Promise.reject(err);
    }
);
interface IConfig {
    showLoading?: boolean;
    showError?: boolean;
}
export default {
    get<T>(
        url: string,
        params?: object,
        options: IConfig = { showLoading: true, showError: true }
    ): Promise<T> {
        return instance.get(url, { params, ...options });
    },
    post<T>(
        url: string,
        data?: object,
        options: IConfig = { showLoading: true, showError: true }
    ): Promise<T> {
        return instance.post(url, data, options);
    },
};

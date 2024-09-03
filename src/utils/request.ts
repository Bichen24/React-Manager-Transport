import axios, { AxiosError } from "axios";

import { message } from "antd";

import { hideLoading, showLoading } from "./Loading";
import storage from "./storage";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 8000,
    timeoutErrorMessage: "请求超时，请稍后在尝试",
    withCredentials: true,
    headers: {
        icode: "B26F304409F82D8F",
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
        showLoading();
        const token = storage.get("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (err: AxiosError) => Promise.reject(err)
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
            message.error(msg);
            return Promise.reject(res.data);
        }
        return data;
    },
    (err: AxiosError) => {
        hideLoading();
        message.error(err.message);
        return Promise.reject(err);
    }
);

export default {
    get<T>(url: string, params?: object): Promise<T> {
        return instance.get(url, { params });
    },
    post<T>(url: string, data?: object): Promise<T> {
        return instance.post(url, data);
    },
};

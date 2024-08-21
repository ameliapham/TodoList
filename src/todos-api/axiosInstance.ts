// custom-instance.ts

import Axios, { type AxiosRequestConfig } from "axios";
import { getOidc } from "../oidc";

console.log(import.meta.env.VITE_TODOS_API_URL);

const axiosInstance = Axios.create({ baseURL: import.meta.env.VITE_TODOS_API_URL });

axiosInstance.interceptors.request.use(async config => {
    const oidc = await getOidc();

    await new Promise(resolve => setTimeout(resolve, 1_000));

    if (oidc.isUserLoggedIn) {
        config.headers.Authorization = `Bearer ${oidc.getTokens().accessToken}`;
    }

    return config;
});

// NOTE: Meant to be used by orval generated client
export const fetch = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> =>
    axiosInstance({
        ...config,
        ...options
    }).then(({ data }) => data);

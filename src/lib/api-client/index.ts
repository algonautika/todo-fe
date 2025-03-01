import { RestResponse } from '@/types/api';
import axios, { InternalAxiosRequestConfig, isAxiosError } from 'axios';
import { err, ok, Result } from 'neverthrow';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    config.headers.Accept = 'application/json';
    config.withCredentials = true;

    return config;
}

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
});

client.interceptors.request.use(authRequestInterceptor);

export const api = {
    get: async (url: string): Promise<Result<unknown, Error>> => {
        try {
            const response = await client.get(url);
            const parse = RestResponse.safeParse(response.data);

            if (!parse.success) {
                return err(parse.error);
            }

            return ok(parse.data.data);
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                return err(error);
            } else if (error instanceof Error) {
                return err(error);
            }

            return err(new Error(String(error)));
        }
    },
    // post: client.post,
    // put: client.put,
    // delete: client.delete,
    // patch: client.patch,
};

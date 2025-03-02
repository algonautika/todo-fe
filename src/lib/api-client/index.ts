import { RestError, RestResponse, RestSuccess } from '@/types/api';
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
    get: async (url: string): Promise<
        Result<RestSuccess, RestError | Error>
    > => { // TODO: 타입 검사 맘에 안듦
        try {
            const response = await client.get<unknown>(url);
            const responseParseResult = RestResponse.safeParse(response.data);

            if (!responseParseResult.success) {
                return err(new Error(`서버에서 받응 응답이 파싱 가능한 Response형태가 아님\n${JSON.stringify(response.data, null, 4)}`));
            }

            const errorParseResult = RestError.safeParse(
                responseParseResult.data,
            );

            if (errorParseResult.success) {
                return err(errorParseResult.data);
            }

            const successParseResult = RestSuccess.safeParse(response.data);

            if (!successParseResult.success) {
                return err(new Error(`Invalid response\n${JSON.stringify(response.data, null, 4)}`));
            }

            return ok(successParseResult.data);
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                return err(error);
            } else if (error instanceof Error) {
                return err(error);
            }

            return err(new Error(String(error)));
        }
    },

    // TODO: data 타입 지정
    post: async <T>(url: string, data?: any): Promise<Result<T, Error>> => {
        try {
            const response = await client.post(url, data);
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
    // put: client.put,
    // delete: client.delete,
    // patch: client.patch,
};

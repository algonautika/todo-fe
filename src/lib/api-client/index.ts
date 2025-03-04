import axios, { AxiosResponse, isAxiosError } from 'axios';
import { err, ok, Result } from 'neverthrow';
import { z } from 'zod';

import { CreationRequest, CreationResponse, GetResponse, RestError } from '@/lib/api-client/types';

/**
 * 해당 schema로 response를 파싱
 * @param schema
 * @param response
 * @returns
 */
function parseResponse<T>(
    schema: z.ZodType<T>,
    response: AxiosResponse<unknown, unknown>,
): Result<T, RestError | Error> {
    const parseResult = schema.safeParse(response.data);

    if (parseResult.success) {
        return ok(parseResult.data);
    }

    const errorParseResult = RestError.safeParse(response.data);

    if (errorParseResult.success) {
        return err(errorParseResult.data);
    }

    return err(new Error(`서버의 응답을 파싱할 수 없음\n${JSON.stringify(response.data, null, 4)}`));
}

/**
 * API 클라이언트
 */
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
});

client.interceptors.request.use((config) => {
    config.headers.Accept = 'application/json';
    config.withCredentials = true;

    return config;
});

export const api = {
    /**
     * GET 요청
     * @param url
     * @returns
     */
    get: async (url: string): Promise<
        Result<GetResponse, RestError | Error>
    > => { // TODO: 타입 검사 맘에 안듦
        try {
            const response: AxiosResponse<unknown, unknown> = await client.get(
                url,
            );

            return parseResponse(GetResponse, response);
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                return err(error);
            } else if (error instanceof Error) {
                return err(error);
            }

            return err(new Error(String(error)));
        }
    },

    // POST 요청
    post: async (url: string, data: CreationRequest): Promise<
        Result<CreationResponse, RestError | Error>
    > => {
        try {
            const response = await client.post(url, data);

            return parseResponse(CreationResponse, response);
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

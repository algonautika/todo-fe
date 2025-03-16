import axios, { AxiosResponse, isAxiosError } from 'axios';
import { err, ok, Result } from 'neverthrow';
import { z } from 'zod';

import { CreationRequest, CreationResponse, GetResponse, InvalidResponse, RestError } from '@/lib/api-client/types';

/**
 * 해당 schema로 response를 파싱
 * @param schema
 * @param response
 * @returns
 */
function parseResponse<T>(
    schema: z.ZodType<T>,
    response: AxiosResponse<unknown, unknown>,
): Result<T, Error> {
    const parseResult = schema.safeParse(response.data);

    if (parseResult.success) {
        return ok(parseResult.data);
    }

    const invalidResponseParseResult = InvalidResponse.safeParse(response.data);

    if (invalidResponseParseResult.success) {
        return err(new RestError(invalidResponseParseResult.data));
    }

    return err(invalidResponseParseResult.error);
}

/**
 * Rest Body를 해당 schema로 파싱
 * @param schema
 * @param restBody
 * @returns
 */
export function parseRestBody<T>(
    schema: z.ZodType<T>,
    restBody: unknown, // TODO: restBody가 Result로 들어오지 않도록 타입 제한 걸기
): Result<T, Error> {
    const parse = schema.safeParse(restBody);

    if (parse.success) {
        return ok(parse.data);
    }

    return err(parse.error);
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
    get: async (
        url: string,
        params?: unknown,
    ): Promise<Result<GetResponse, Error>> => {
        try {
            const response: AxiosResponse<unknown, unknown> = await client.get(
                url,
                {
                    params: params,
                },
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
        Result<CreationResponse, InvalidResponse | Error>
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

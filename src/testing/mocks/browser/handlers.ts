import { loremIpsum } from 'lorem-ipsum';
import { delay, http, HttpResponse } from 'msw';

import { RestError } from '@/lib/api-client/types';
import { PreviewListReqeustParams, TodoPreviewListResponse } from '@/lib/api-client/types/preview';
import { Todo, User } from '@/types/model';

const todos = Array.from({
    length: 30,
}, (_, index) => ({
    id: index + 1,
    userId: 1,
    title: `할 일 ${String(index + 1)}`,
    description: loremIpsum({
        count: 3,
        units: 'sentences',
    }),
    startDate: '2021-10-01T00:00:00Z',
    endDate: '2021-10-01T00:00:00Z',
    deadline: '2021-10-01T00:00:00Z',
    timeZone: 'Asia/Seoul',
    checked: false,
} satisfies Todo));

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/login/authorization/google`, (_resolver) => {
        return new HttpResponse(null, {
            status: 200,
            headers: {
                'Set-Cookie': `access_token=test; Path=/; Domain=${import.meta.env.VITE_API_HOST}; HttpOnly; SameSite=None; Secure`,
                Location: `http://localhost:5173`,
            },
        });
    }),
    http.get(`${import.meta.env.VITE_API_URL}/v1/users/me`, (resolver) => {
        if (resolver.cookies['access_token'] !== 'test') {
            return HttpResponse.json<RestError | User>({
                status: 401,
                message: 'Unauthorized',
            });
        }

        return HttpResponse.json<RestError | User>({
            id: 1,
            email: 'test@algo.note',
        });
    }),
    http.get(`${import.meta.env.VITE_API_URL}/v1/todos`, async (resolver) => {
        if (resolver.cookies['access_token'] !== 'test') {
            return HttpResponse.json<RestError | TodoPreviewListResponse>({
                status: 401,
                message: 'Unauthorized',
            });
        }

        const params = new URL(resolver.request.url).searchParams;

        const parse = PreviewListReqeustParams.safeParse({
            pageNumber: Number(params.get('pageNumber')),
            pageSize: Number(params.get('pageSize')),
        });

        if (parse.success) {
            const params = parse.data;

            return HttpResponse.json<RestError | TodoPreviewListResponse>({
                list: todos.slice(
                    params.pageNumber * params.pageSize,
                    (params.pageNumber + 1) * params.pageSize,
                ),
                totalPageSize: Math.ceil(todos.length / params.pageSize),
                pageNumber: params.pageNumber,
            });
        }

        console.log(
            new URL(resolver.request.url).searchParams,
        );

        console.log(parse.error);

        await delay(5000);

        return HttpResponse.json<RestError | TodoPreviewListResponse>({
            status: 500,
            message: `Internal Server Error`,
        });
    }),
];

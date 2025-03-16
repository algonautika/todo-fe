import { loremIpsum } from 'lorem-ipsum';
import { delay, http, HttpResponse } from 'msw';
import { Temporal } from 'temporal-polyfill';

import { InvalidResponse } from '@/lib/api-client/types';
import { TodoCreationRequest, TodoCreationResponse } from '@/lib/api-client/types/creation';
import { PreviewListReqeustParams, TodoPreviewListResponse } from '@/lib/api-client/types/preview';
import { Todo, User } from '@/types/model';

const todos: Todo[] = Array.from({
    length: 30,
}, (_, index) => ({
    id: index + 1,
    userId: 1,
    title: `할 일 ${String(index + 1)}`,
    description: loremIpsum({
        count: 3,
        units: 'sentences',
    }),
    startDate: '2021-10-01T00:00:00',
    endDate: '2021-10-01T00:00:00',
    deadline: Temporal.Now.plainDateTimeISO().toString(),
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
            return HttpResponse.json<InvalidResponse | User>({
                status: 401,
                message: 'Unauthorized',
            });
        }

        return HttpResponse.json<InvalidResponse | User>({
            id: 1,
            email: 'test@algo.note',
        });
    }),
    http.get(`${import.meta.env.VITE_API_URL}/v1/todos`, async (resolver) => {
        await delay(1000);

        if (resolver.cookies['access_token'] !== 'test') {
            return HttpResponse
                .json<InvalidResponse | TodoPreviewListResponse>({
                    status: 401,
                    message: 'Unauthorized',
                });
        }

        const params = new URL(resolver.request.url).searchParams;

        const parse = PreviewListReqeustParams.safeParse({
            page: Number(params.get('page')),
            pageSize: Number(params.get('pageSize')),
        });

        if (parse.success) {
            const params = parse.data;

            return HttpResponse
                .json<InvalidResponse | TodoPreviewListResponse>({
                    list: todos
                        .sort((a, b) => {
                            if (a.deadline === null || b.deadline === null) {
                                return 0;
                            }

                            return Temporal.PlainDateTime
                                .compare(a.deadline, b.deadline);
                        })
                        .slice(
                            params.page * params.pageSize,
                            (params.page + 1) * params.pageSize,
                        ),
                    totalPageSize: Math.ceil(todos.length / params.pageSize),
                    page: params.page,
                });
        }

        console.log(
            new URL(resolver.request.url).searchParams,
        );

        console.log(parse.error);

        return HttpResponse.json<InvalidResponse | TodoPreviewListResponse>({
            status: 500,
            message: `Internal Server Error`,
        });
    }),
    http.post(`${import.meta.env.VITE_API_URL}/v1/todos`, async (resolver) => {
        await delay(1000);

        if (resolver.cookies['access_token'] !== 'test') {
            return HttpResponse
                .json<InvalidResponse | TodoCreationResponse>({
                    status: 401,
                    message: 'Unauthorized',
                });
        }

        if (resolver.request.body === null) {
            return HttpResponse
                .json<InvalidResponse | TodoCreationResponse>({
                    status: 400,
                    message: 'Bad Request. body가 비어있음',
                });
        }

        const body = await resolver.request.json();

        const todo = TodoCreationRequest.safeParse(body);

        console.log(body);

        if (!todo.success) {
            console.log(todo.error);

            return HttpResponse
                .json<InvalidResponse | TodoCreationResponse>({
                    status: 400,
                    message: 'Bad Request. body가 잘못됨',
                });
        }

        const newTodo: Todo = {
            ...todo.data,
            id: todos.length + 1,
            userId: 1,
            checked: false,
        };

        todos.push(newTodo);

        console.log('새 할 일:', newTodo, '생성됨');

        return HttpResponse
            .json<InvalidResponse | TodoCreationResponse>({
                id: newTodo.id,
            });
    }),
];

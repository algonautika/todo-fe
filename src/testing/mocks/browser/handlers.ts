import { http, HttpResponse } from 'msw';

import { RestError } from '@/lib/api-client/types';
import { TodoPreviewListResponse } from '@/lib/api-client/types/preview';
import { User } from '@/types/model';

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
    http.get(`${import.meta.env.VITE_API_URL}/api/users/me`, (resolver) => {
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
    http.get(`${import.meta.env.VITE_API_URL}/api/todos`, (resolver) => {
        if (resolver.cookies['access_token'] !== 'test') {
            return HttpResponse.json<RestError | TodoPreviewListResponse>({
                status: 401,
                message: 'Unauthorized',
            });
        }

        return HttpResponse.json<RestError | TodoPreviewListResponse>({
            list: [
                {
                    id: 1,
                    userId: 1,
                    title: '할 일 1',
                    description: '할 일 1 설명',
                    startDate: '2021-10-01T00:00:00Z',
                    endDate: '2021-10-01T00:00:00Z',
                    deadline: '2021-10-01T00:00:00Z',
                    timeZone: 'Asia/Seoul',
                },
                {
                    id: 2,
                    userId: 1,
                    title: '할 일 2',
                    description: '할 일 2 설명',
                    startDate: '2021-10-01T00:00:00Z',
                    endDate: '2021-10-01T00:00:00Z',
                    deadline: '2021-10-01T00:00:00Z',
                    timeZone: 'Asia/Seoul',
                },
            ],
            totalPageSize: 1,
        });
    }),
];

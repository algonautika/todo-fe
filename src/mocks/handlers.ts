import { RestResponse } from '@/types/api';
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/users/me`, (resolver) => {
        console.log(resolver.cookies['access_token']);
        if (resolver.cookies['access_token'] === 'test') {
            return HttpResponse.json<RestResponse>({
                status: 200,
                message: 'Success',
                data: {
                    name: 'Maverick',
                },
            });
        } else {
            return HttpResponse.json<RestResponse>({
                status: 401,
                message: 'Unauthorized',
            });
        }
    }),
];

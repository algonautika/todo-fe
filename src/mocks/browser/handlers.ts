import { RestResponse } from '@/types/api';
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/users/me`, (resolver) => {
        if (resolver.cookies['access_token'] === 'test') {
            return HttpResponse.json<RestResponse>({
                email: 'a@a.a',
            });
        } else {
            return HttpResponse.json<RestResponse>({
                status: 401,
                message: 'Unauthorized',
            });
        }
    }),
    http.get(`${import.meta.env.VITE_API_URL}/login/authorization/google`, (_resolver) => {
        return new HttpResponse(null, {
            status: 302,
            headers: {
                'Set-Cookie': 'access_token=test; Path=/; Domain=localhost; HttpOnly; SameSite=Strict',
                Location: `http://localhost:5173`,
            },
        });
    }),
];

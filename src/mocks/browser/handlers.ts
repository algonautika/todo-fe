import { User } from '@/types/model';
import { RestError } from '@/lib/api-client/types';
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/users/me`, (resolver) => {
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
    http.get(`${import.meta.env.VITE_API_URL}/login/authorization/google`, (_resolver) => {
        return new HttpResponse(null, {
            status: 200,
            headers: {
                'Set-Cookie': `access_token=test; Path=/; Domain=${import.meta.env.VITE_API_HOST}; HttpOnly; SameSite=None; Secure`,
                Location: `http://localhost:5173`,
            },
        });
    }),
];

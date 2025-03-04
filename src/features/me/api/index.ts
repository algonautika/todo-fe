import { api, parseRestBody } from '@/lib/api-client';
import { User } from '@/types/model';

export async function getMe() {
    const restBody = await api.get('/api/users/me');

    return parseRestBody(User, restBody);
}

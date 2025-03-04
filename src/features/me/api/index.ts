import { err, Result } from 'neverthrow';

import { api, parseRestBody } from '@/lib/api-client';
import { RestError } from '@/lib/api-client/types';
import { User } from '@/types/model';

export async function getMe(): Promise<Result<User, RestError | Error>> {
    const restBody = await api.get('/api/users/me');

    if (restBody.isOk()) {
        return parseRestBody(User, restBody.value);
    }

    return err(restBody.error);
}

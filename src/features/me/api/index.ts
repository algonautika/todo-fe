import { err, ok } from 'neverthrow';

import { api } from '@/lib/api-client';
import { User } from '@/types/model';

export async function getMe() {
    const response = await api.get('/api/users/me');

    if (response.isErr()) {
        return err(response.error);
    }

    const parse = User.safeParse(response.value);

    if (!parse.success) {
        return err(parse.error);
    }

    return ok(parse.data);
}

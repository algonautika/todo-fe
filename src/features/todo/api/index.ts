import { err, ok } from 'neverthrow';

import { api } from '@/lib/api-client';
import { TodoCreationRequest, TodoCreationResponse } from '@/lib/api-client/types/creation';
import { TodoPreviewListResponse } from '@/lib/api-client/types/preview';

/**
 * Todo 리스트를 가져오는 API
 * @returns
 */
export async function getTodos() {
    const response = await api.get('/api/todos');

    if (response.isErr()) {
        return err(response.error);
    }

    const parse = TodoPreviewListResponse.safeParse(response.value);

    if (!parse.success) {
        return err(parse.error);
    }

    return ok(parse.data);
}

/**
 * Todo를 생성하는 API
 * @param data
 * @returns
 */
export async function createTodo(data: TodoCreationRequest) {
    const response = await api.post('/todos', data);

    if (response.isErr()) {
        return err(response.error);
    }

    const parse = TodoCreationResponse.safeParse(response.value);

    if (!parse.success) {
        return err(parse.error);
    }

    return ok(parse.data);
}

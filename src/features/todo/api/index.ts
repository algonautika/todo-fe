import { err, Result } from 'neverthrow';

import { api, parseRestBody } from '@/lib/api-client';
import { TodoCreationRequest, TodoCreationResponse } from '@/lib/api-client/types/creation';
import { TodoGetResponse } from '@/lib/api-client/types/get';
import { PreviewListReqeustParams, TodoPreviewListResponse } from '@/lib/api-client/types/preview';

/**
 * Todo 리스트를 가져오는 API
 * @returns
 */
export async function getTodos(
    params: PreviewListReqeustParams,
): Promise<Result<TodoPreviewListResponse, Error>> {
    const restBody = await api.get(
        `/v1/todos`,
        params,
    );

    if (restBody.isOk()) {
        return parseRestBody(
            TodoPreviewListResponse, restBody.value,
        );
    }

    return err(restBody.error);
}

export async function getTodo(
    id: string,
): Promise<Result<TodoGetResponse, Error>> {
    const restBody = await api.get(`/v1/todos/${id}`);

    if (restBody.isOk()) {
        return parseRestBody(TodoGetResponse, restBody.value);
    }

    return err(new Error(restBody.error.message));
}

/**
 * Todo를 생성하는 API
 * @param data
 * @returns
 */
export async function createTodo(data: TodoCreationRequest) {
    const restBody = await api.post('/v1/todos', data);

    if (restBody.isOk()) {
        return parseRestBody(TodoCreationResponse, restBody);
    }

    return err(new Error(restBody.error.message));
}

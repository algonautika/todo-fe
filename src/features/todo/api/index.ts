import { err, Result } from 'neverthrow';

import { api, parseRestBody } from '@/lib/api-client';
import { RestError } from '@/lib/api-client/types';
import { TodoCreationRequest, TodoCreationResponse } from '@/lib/api-client/types/creation';
import { TodoGetResponse } from '@/lib/api-client/types/get';
import { PreviewListReqeustParams, TodoPreviewListResponse } from '@/lib/api-client/types/preview';

/**
 * Todo 리스트를 가져오는 API
 * @returns
 */
export async function getTodos(
    params: PreviewListReqeustParams,
): Promise<Result<TodoPreviewListResponse, RestError | Error>> {
    const restBody = await api.get(
        `/api/todos`,
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
): Promise<Result<TodoGetResponse, RestError | Error>> {
    const restBody = await api.get(`/api/todos/${id}`);

    if (restBody.isOk()) {
        return parseRestBody(TodoGetResponse, restBody.value);
    }

    return err(restBody.error);
}

/**
 * Todo를 생성하는 API
 * @param data
 * @returns
 */
export async function createTodo(data: TodoCreationRequest) {
    const restBody = await api.post('/todos', data);

    if (restBody.isOk()) {
        return parseRestBody(TodoCreationResponse, restBody);
    }

    return err(restBody.error);
}

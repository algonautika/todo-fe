import { api, parseRestBody } from '@/lib/api-client';
import { TodoCreationRequest, TodoCreationResponse } from '@/lib/api-client/types/creation';
import { TodoGetResponse } from '@/lib/api-client/types/get';
import { TodoPreviewListResponse } from '@/lib/api-client/types/preview';

/**
 * Todo 리스트를 가져오는 API
 * @returns
 */
export async function getTodos() {
    const restBody = await api.get('/api/todos');

    return parseRestBody(TodoPreviewListResponse, restBody);
}

export async function getTodo(id: string) {
    const restBody = await api.get(`/api/todos/${id}`);

    return parseRestBody(TodoGetResponse, restBody);
}

/**
 * Todo를 생성하는 API
 * @param data
 * @returns
 */
export async function createTodo(data: TodoCreationRequest) {
    const restBody = await api.post('/todos', data);

    return parseRestBody(TodoCreationResponse, restBody);
}

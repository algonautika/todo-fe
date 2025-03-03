import { api } from '@/lib/api-client';
import { TodoCreationRequest } from '@/lib/api-client/types/creation';
import { Todo } from '@/types/model';
import { err, ok } from 'neverthrow';

export async function createTodo(data: TodoCreationRequest) {
    const response = await api.post('/todos', data);

    if (response.isErr()) {
        return err(response.error);
    }

    const parse = Todo.safeParse(response.value);

    if (!parse.success) {
        return err(parse.error);
    }

    return ok(parse.data);
}

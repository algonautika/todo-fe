import { LazyValue } from '@/lib/api-client/types';
import { TodoCreationRequest } from '@/lib/api-client/types/creation';
import { err } from 'neverthrow';
import { useCallback, useState } from 'react';
import { createTodo } from '../api';

export const useCreateTodo = () => {
    const [todo, setTodo] = useState<LazyValue<Awaited<ReturnType<typeof createTodo>>>>('Loading');

    const create = useCallback(
        (data: TodoCreationRequest) => {
            createTodo(data)
                .then((result) => {
                    setTodo(result);
                })
                .catch((error: unknown) => {
                    setTodo(err(new Error(String(error))));
                });
        }, []);

    return {
        create,
        todo,
    };
};

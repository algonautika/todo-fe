import { err } from 'neverthrow';
import { useCallback, useState } from 'react';

import { LazyValue } from '@/lib/api-client/types';
import { TodoCreationRequest } from '@/lib/api-client/types/creation';

import { createTodo, getTodos } from '../api';

export const useTodos = () => {
    const [todos, setTodos] = useState<LazyValue<Awaited<ReturnType<typeof getTodos>>>>('Loading');

    const fetch = useCallback(() => {
        getTodos()
            .then((response) => {
                setTodos(response);
            })
            .catch((error: unknown) => {
                setTodos(err(new Error(String(error))));
            });
    }, []);

    return {
        fetch,
        todos,
    };
};

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

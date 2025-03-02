import { LazyValue } from '@/types/api';
import { Todo } from '@/types/model';
import { err } from 'neverthrow';
import { useCallback, useState } from 'react';
import { createTodo } from '../api';

export const useCreateTodo = () => {
    const [todo, setTodo] = useState<LazyValue<Awaited<ReturnType<typeof createTodo>>>>('Loading');

    const create = useCallback(
        (data: Todo) => {
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

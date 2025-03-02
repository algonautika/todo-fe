import { useCallback, useState } from 'react';
import { createTodo } from '../api';
import { Todo } from '@/types/model';
import { LazyValue } from '@/types/api';

export const useCreateTodo = () => {
    d;
    const useCreate = useCallback((data: Todo) => {
        const [postRes, setPostRes] = useState<LazyValue<Awaited<ReturnType<typeof createTodo>>>>('Loading');
        createTodo(data)
            .then((response) => {
                setPostRes(response);
            })
            .catch((err: unknown) => {
                setPostRes(err);
            });

        return postRes;
    }, []);

    return useCreate;
};

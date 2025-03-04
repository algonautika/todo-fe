import { useInfiniteQuery } from '@tanstack/react-query';

import { getTodos } from '../api';

export const useTodos = (pageSize: number) => {
    return useInfiniteQuery({
        queryKey: [
            'todos', {
                pageSize,
            },
        ],
        queryFn: async (p) => {
            return await getTodos({
                pageNumber: p.pageParam,
                pageSize,
                sort: undefined,
                preview: undefined,
            });
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return 1; // TODO
        },
    });
};

export const useCreateTodo = () => {
    // TODO: tanstack을 이용해서 todo 생성
};

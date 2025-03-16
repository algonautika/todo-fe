import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo, getTodos } from '../api';

export const useTodos = (pageSize: number) => {
    return useInfiniteQuery({
        queryKey: [
            'todos', {
                pageSize,
            },
        ],
        queryFn: async (p) => {
            return await getTodos({
                page: p.pageParam,
                pageSize,
                // TODO: 나중에 추가할 파라미터
                sort: undefined,
                preview: undefined,
            });
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.isErr()) {
                return undefined;
            }

            const { totalPageSize, page: pageNumber } = lastPage.value;

            if (totalPageSize <= pageNumber + 1) {
                return undefined;
            }

            return pageNumber + 1; // TODO
        },
        getPreviousPageParam: (firstPage) => {
            if (firstPage.isErr()) {
                return undefined;
            }

            const { page: pageNumber } = firstPage.value;

            if (pageNumber <= 0) {
                return undefined;
            }

            return pageNumber - 1; // TODO
        },
    });
};

export const useCreateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
        mutationFn: createTodo,
    });
};

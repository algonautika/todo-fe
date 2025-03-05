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
            if (lastPage.isErr()) {
                return undefined;
            }

            const { totalPageSize, pageNumber } = lastPage.value;

            if (totalPageSize <= pageNumber + 1) {
                return undefined;
            }

            return pageNumber + 1; // TODO
        },
    });
};

export const useCreateTodo = () => {
    // TODO: tanstack을 이용해서 todo 생성
};

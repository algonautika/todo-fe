import { z } from 'zod';

import { Todo } from '../../../types/model';

function listResponse<T>(schema: z.ZodType<T>) {
    return z.object({
        list: z.array(schema),
        totalPageSize: z.number(),
        pageNumber: z.number(),
    });
}

export const PreviewListReqeustParams = z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    sort: z.undefined(),
    preview: z.undefined(),
});

export const TodoPreviewResponse = Todo.pick({
    id: true,
    userId: true,
    title: true,
    description: true,
    startDate: true,
    endDate: true,
    deadline: true,
    timeZone: true,
    checked: true,
});

export const TodoPreviewListResponse = listResponse(TodoPreviewResponse);

export type PreviewListReqeustParams = z.infer<typeof PreviewListReqeustParams>;

export type TodoPreviewResponse = z.infer<typeof TodoPreviewResponse>;

export type TodoPreviewListResponse = z.infer<typeof TodoPreviewListResponse>;

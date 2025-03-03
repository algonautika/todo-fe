import { z } from 'zod';
import { Todo } from '../../../types/model';

export const TodoPreviewResponse = Todo.pick({
    id: true,
    userId: true,
    title: true,
    description: true,
    startDate: true,
    endDate: true,
    deadline: true,
    timeZone: true,
});

export type TodoPreview = z.infer<typeof TodoPreviewResponse>;

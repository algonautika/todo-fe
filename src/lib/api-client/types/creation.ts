import { z } from 'zod';

import { Todo } from '@/types/model';

export const TodoCreationRequest = Todo.pick({
    title: true,
    description: true,
    startDate: true,
    endDate: true,
    deadline: true,
    timeZone: true,
});

export const TodoCreationResponse = Todo.pick({
    id: true,
});

export type TodoCreationRequest = z.infer<typeof TodoCreationRequest>;

export type TodoCreationResponse = z.infer<typeof TodoCreationResponse>;

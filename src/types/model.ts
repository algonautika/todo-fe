import { z } from 'zod';

export const User = z.object({
    id: z.number(),
    email: z.string(),
});

export const Todo = z.object({
    id: z.number(),
    userId: z.number(),
    title: z.string(),
    description: z.string(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    deadline: z.string().datetime(),
    timeZone: z.string(),
});

export type User = z.infer<typeof User>;

export type Todo = z.infer<typeof Todo>;

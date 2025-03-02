import { z } from 'zod';

export const User = z.object({
    email: z.string(),
});

export const Todo = z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    deadline: z.string(),
    timeZone: z.string(),
});

export type User = z.infer<typeof User>;

export type Todo = z.infer<typeof Todo>;

import { z } from 'zod';

export const User = z.object({
    name: z.string(),
});

export const Todo = z.object({
    title: z.string(),
});

export type User = z.infer<typeof User>;

export type Todo = z.infer<typeof Todo>;

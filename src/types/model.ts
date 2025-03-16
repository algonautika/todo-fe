import { z } from 'zod';

export const User = z.object({
    id: z.number(),
    email: z.string(),
});

export const Todo = z.object({
    id: z.number(),
    userId: z.number(),
    title: z.string(),
    description: z.union([z.null(), z.string()]),
    startDate: z.union([
        z.null(), z.string().datetime({
            local: true,
        }),
    ]),
    endDate: z.union([
        z.null(), z.string().datetime({
            local: true,
        }),
    ]),
    deadline: z.union([
        z.null(), z.string().datetime({
            local: true,
        }),
    ]),
    timeZone: z.string(),
    checked: z.boolean(),
});

export type User = z.infer<typeof User>;

export type Todo = z.infer<typeof Todo>;

import { z } from 'zod';
import { Todo, User } from './model';

export type LazyValue<T> = 'Loading' | T;

export const RestResponse = z.union([
    z.object({
        status: z.number(),
        message: z.string(),
    }),
    User,
    Todo,
]);

export type RestResponse = z.infer<typeof RestResponse>;

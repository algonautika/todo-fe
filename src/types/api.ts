import { z } from 'zod';
import { Todo, User } from './model';

export type LazyValue<T> = 'Loading' | T;

export const RestResponse = z.object({
    status: z.number(),
    message: z.string(),
    data: z.union([z.undefined(), User, Todo]),
});

export type RestResponse = z.infer<typeof RestResponse>;

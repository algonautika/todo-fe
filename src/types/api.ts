import { z } from 'zod';
import { Todo, User } from './model';

export type LazyValue<T> = 'Loading' | T;

export const RestError = z.object({
    status: z.number(),
    message: z.string(),
});

export const RestSuccess = z.union([
    User,
    Todo,
]);

export const RestResponse = z.union([
    RestError,
    RestSuccess,
]);

export type RestError = z.infer<typeof RestError>;

export type RestSuccess = z.infer<typeof RestSuccess>;

export type RestResponse = z.infer<typeof RestResponse>;

import { z } from 'zod';
import * as model from '@/types/model';
import * as creation from './creation';
import * as preview from './preview';

export const GetResponse = z.union([
    model.User,
    model.Todo,
]);

export const CreationRequest = creation.TodoCreationRequest;

export const CreationResponse = creation.TodoCreationResponse;

export const PreviewResponse = preview.TodoPreviewResponse;

export type GetResponse = z.infer<typeof GetResponse>;

export type CreationRequest = z.infer<typeof CreationRequest>;

export type CreationResponse = z.infer<typeof CreationResponse>;

export type PreviewResponse = z.infer<typeof PreviewResponse>;

export type LazyValue<T> = 'Loading' | T;

export const RestError = z.object({
    status: z.number(),
    message: z.string(),
});

export type RestError = z.infer<typeof RestError>;

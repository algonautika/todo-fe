import { z } from 'zod';

import * as creation from './creation';
import * as get from './get';
import * as preview from './preview';

export const PreviewResponse = preview.TodoPreviewResponse;

export const GetResponse = z.union([
    preview.TodoPreviewListResponse,
    get.UserGetResponse,
    get.TodoGetResponse,
]);

export const CreationRequest = creation.TodoCreationRequest;

export const CreationResponse = creation.TodoCreationResponse;

export type GetResponse = z.infer<typeof GetResponse>;

export type CreationRequest = z.infer<typeof CreationRequest>;

export type CreationResponse = z.infer<typeof CreationResponse>;

export type PreviewResponse = z.infer<typeof PreviewResponse>;

export const InvalidResponse = z.object({
    status: z.number(),
    message: z.string(),
});

export type InvalidResponse = z.infer<typeof InvalidResponse>;

export class RestError extends Error {
    public readonly response: InvalidResponse;

    constructor(response: InvalidResponse) {
        super(response.message);
        this.response = response;
    }
}

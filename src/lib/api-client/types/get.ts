import { z } from 'zod';

import * as model from '@/types/model';

export const UserGetResponse = model.User;

export const TodoGetResponse = model.Todo;

export type TodoGetResponse = z.infer<typeof TodoGetResponse>;

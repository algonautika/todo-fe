import * as model from '@/types/model';
import { z } from 'zod';

export const GetResponse = model.Todo;

export type GetResponse = z.infer<typeof GetResponse>;

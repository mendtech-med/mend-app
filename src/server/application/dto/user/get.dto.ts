import { z } from 'zod';

export interface GetUserDto {
    id?: string;
};

export const GetUserSchema = z.object({
    id: z.string().optional()
});
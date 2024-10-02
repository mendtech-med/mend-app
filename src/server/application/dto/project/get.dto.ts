import { z } from 'zod';


export interface GetProjectDto {
    id?: string;
    userId: string;
};


export const GetProjectSchema = z.object({
    id: z.string().optional(),
    userId: z.string(),
});



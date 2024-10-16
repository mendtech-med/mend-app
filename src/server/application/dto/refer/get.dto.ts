import { z } from 'zod';


export interface GetReferDto {
    projectId?: string;
};


export const GetReferSchema = z.object({
    id: z.string().optional(),
    projectId: z.string().optional(),
});



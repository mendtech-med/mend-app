import { z } from 'zod';


export interface UpdateReferDto {
    id: string;
    content: string;
    sourceUrl: string;
    projectId: string;
};


export const UpdateReferSchema = z.object({
    id: z.string(),
    content: z.string(),
    sourceUrl: z.string(),
    projectId: z.string()
});



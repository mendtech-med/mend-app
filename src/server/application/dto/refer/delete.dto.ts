import { z } from 'zod';


export interface DeleteReferDto {
    id: string;
    projectId: string;
};


export const DeleteReferSchema = z.object({
    id: z.string(),
    projectId: z.string()
});



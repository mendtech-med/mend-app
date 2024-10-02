import { z } from 'zod';


export interface DeleteProjectDto {
    id: string;
    ownerId: string;
};


export const DeleteProjectSchema = z.object({
    id: z.string(),
    ownerId: z.string()
});



import { z } from 'zod';


export interface UpdateProjectDto {
    id: string;
    title?: string;
    content?: string;
    ownerId: string;
};


export const UpdateProjectSchema = z.object({
    id: z.string(),
    title: z.string().optional(), 
    content: z.string().optional(),
    ownerId: z.string()
});



import { z } from 'zod';


export interface UpdateProjectDto {
    id: string;
    name?: string;
    ownerId: string;
};


export const UpdateProjectSchema = z.object({
    id: z.string(),
    name: z.string().optional(), 
    ownerId: z.string()
});



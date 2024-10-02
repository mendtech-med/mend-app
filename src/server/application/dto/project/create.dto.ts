import { z } from 'zod';


export interface CreateProjectDto {
    name: string;
    ownerId: string;
};


export const CreateProjectSchema = z.object({
    name: z.string(),
    ownerId: z.string()
});



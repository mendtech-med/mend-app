import { z } from 'zod';

export interface CreateReferDto {
    content: string;
    sourceUrl: string;
    project: {
        id: string;
        title: string;
    };
};


export const CreateReferSchema = z.object({
    content: z.string(),
    sourceUrl: z.string(),
    projectId: z.string()
});



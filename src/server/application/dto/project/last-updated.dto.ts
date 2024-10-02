import { z } from 'zod';


export interface LastUpdatedProjectsDto {
    userId: string;
};


export const LastUpdatedProjectsSchema = z.object({
    userId: z.string(),
});



import { z } from 'zod';


export interface GetBrandVoiceDto {
    id?: string;
    userId: string;
};


export const GetBrandVoiceSchema = z.object({
    id: z.string().optional(),
    userId: z.string(),
});



import { z } from 'zod';


export interface DeleteBrandVoiceDto {
    id: string;
    ownerId: string;
};


export const DeleteBrandVoiceSchema = z.object({
    id: z.string(),
    ownerId: z.string()
});



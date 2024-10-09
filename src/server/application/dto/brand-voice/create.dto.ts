import { z } from 'zod';

export interface CreateBrandVoiceDto {
    name: string;
    tone: string[];
    personality: string[];
    languageStyle: string[];
    pointOfView: string[];
    consistency: string[];
    clarity: string[];
    distinctiveness: string[];
    audienceFocused: string[];
    accessibility: string[];
    adaptability: string[];
    ownerId: string;
};


export const CreateBrandVoiceSchema = z.object({
    name: z.string(),
    tone: z.array(z.string()),
    personality: z.array(z.string()),
    languageStyle: z.array(z.string()),
    pointOfView: z.array(z.string()),
    consistency: z.array(z.string()),
    clarity: z.array(z.string()),
    distinctiveness: z.array(z.string()),
    audienceFocused: z.array(z.string()),
    accessibility: z.array(z.string()),
    adaptability: z.array(z.string()),
    ownerId: z.string(),
});



import { z } from 'zod';
type AudienceTarget = 'DEVELOPER' | 'DESIGNER' | 'MARKETER' | 'PRODUCT_MANAGER' | 'SALES' | 'CUSTOMER_SUPPORT' | 'HR' | 'FINANCE' | 'LEGAL' | 'OTHER';
type AudienceLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

interface Audience {
    target: AudienceTarget;
    level: AudienceLevel;
    brandVoiceId: string;
}


export interface CreateProjectDto {
    title: string;
    content?: string;
    ownerId: string;
    audience: Audience;
};


export const CreateProjectSchema = z.object({
    title: z.string(),
    ownerId: z.string(),
    content: z.string().optional(),
    audience: z.object({
        target: z.enum(['DEVELOPER', 'DESIGNER', 'MARKETER', 'PRODUCT_MANAGER', 'SALES', 'CUSTOMER_SUPPORT', 'HR', 'FINANCE', 'LEGAL', 'OTHER']),
        level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
        brandVoiceId: z.string()
    })
});



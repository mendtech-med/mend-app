import { z } from 'zod';

export interface UpdateUserDto {
    id: string;
    clerkId: string;
    emails: string[];
    phoneNumbers: string[];
    firstName?: string;
    lastName?: string;
};


export const UpdateUserSchema = z.object({
    id: z.string(),
    clerkId: z.string(),
    emails: z.array(z.string()),
    phoneNumbers: z.array(z.string()),
    firstName: z.string().optional(),
    lastName: z.string().optional()
});



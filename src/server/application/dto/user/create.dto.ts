import { z } from 'zod';


export interface CreateUserDto {
    clerkId: string;
    emails: string[];
    phoneNumbers: string[];
    firstName?: string;
    lastName?: string;
};


export const CreateUserSchema = z.object({
    clerkId: z.string(),
    emails: z.array(z.string()),
    phoneNumbers: z.array(z.string()),
    firstName: z.string().optional(),
    lastName: z.string().optional()
});



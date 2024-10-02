import { z } from 'zod';


export interface DeleteUserDto {
    id: string;
};


export const DeleteUserSchema = z.object({
    id: z.string()
});



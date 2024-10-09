import { z } from 'zod';


export interface LastUpdatedBrandVoicesDto {
    userId: string;
};


export const LastUpdatedBrandVoicesSchema = z.object({
    userId: z.string(),
});



// components/CategorySetup/types.ts

import { z } from 'zod';
import { Types, Preferences } from './data';

// Define the types for the category setup form
export type ITypes = typeof Types[number];

export type IPreferences = typeof Preferences;

// Extract all preference keys dynamically based on the selected type
type PreferenceKeys<T extends ITypes> = IPreferences[T] extends Array<{ key: infer K; options: string[] }>
    ? K extends string
    ? K
    : never
    : never;

// Define the Zod schema for validation
export const CategorySetupSchema = z.object({
    type: z.enum(Types, { required_error: 'Type is required' }),
    category: z.string().min(0, { message: 'Category is required' }),
    preferences: z.record(z.string().min(0)).refine(
        (data) => Object.keys(data).length > 0,
        { message: 'At least one preference must be selected' }
    ),
});

// Type for form values
export type CategorySetupFormValues = z.infer<typeof CategorySetupSchema>;

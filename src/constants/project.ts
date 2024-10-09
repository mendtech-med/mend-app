export const AudienceTarget = {
    DEVELOPER: 'Developer',
    DESIGNER: 'Designer',
    MARKETER: 'Marketer',
    PRODUCT_MANAGER: 'Product Manager',
    SALES: 'Sales',
    CUSTOMER_SUPPORT: 'Customer Support',
    HR: 'HR',
    FINANCE: 'Finance',
    LEGAL: 'Legal',
    OTHER: 'Other',
} as const;

export type AudienceTarget = keyof typeof AudienceTarget;

export const AudienceLevel = {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
} as const;

export type AudienceLevel = keyof typeof AudienceLevel;

export const BrandVoice = {
    FORMAL: 'Formal',
    INFORMAL: 'Informal',
    FRIENDLY: 'Friendly',
    AUTHORITATIVE: 'Authoritative',
    PROFESSIONAL: 'Professional',
    CASUAL: 'Casual',
    OTHER: 'Other',
} as const;

export type BrandVoice = keyof typeof BrandVoice;

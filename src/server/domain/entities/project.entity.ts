type AudienceTarget = 'DEVELOPER' | 'DESIGNER' | 'MARKETER' | 'PRODUCT_MANAGER' | 'SALES' | 'CUSTOMER_SUPPORT' | 'HR' | 'FINANCE' | 'LEGAL' | 'OTHER';
type AudienceLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';


interface Audience {
    target: AudienceTarget;
    level: AudienceLevel;
    brandVoiceId: string;
}


interface Project {
    id: string;
    title: string;
    content?: string;
    audience: Audience;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
}

export default Project;



interface BrandVoice {
    id: string;
    name: string;
    tone: string[];
    personality: string[];
    languageStyle: string[];
    pointOfView: string[];
    consistency: string[];
    clarity: string[];
    distinctiveness: string[];
    audienceFocused: string[]
    accessibility: string[];
    adaptability: string[];
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
}

export default BrandVoice;
// server/types/index.ts

export interface GenerateParams {
    title: string;
    targetAudience: string;
    targetAudienceLevel: string;
    brandVoiceId: string;
}

export interface ReWriteParams {
    title: string;
    referContent: string;
    selection: string;
    targetAudience: string;
    targetAudienceLevel: string;
    brandVoice: string;
}

export interface FindParams {
    title: string;
    selection: string;
    targetAudience: string;
    targetAudienceLevel: string;
    brandVoice: string;
    type : string;
}


export interface BrandVoice {
    name: string,
    content: string
}

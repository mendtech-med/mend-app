import BrandVoice from "../entities/brand-voice.entity";
interface UpdateBrandVoiceDto {
    id: string;
    name?: string;
    tone?: string[];
    personality?: string[];
    languageStyle?: string[];
    pointOfView?: string[];
    consistency?: string[];
    clarity?: string[];
    distinctiveness?: string[];
    audienceFocused?: string[];
    accessibility?: string[];
    adaptability?: string[];
};

type CreateBrandVoiceDto = Omit<BrandVoice, "id" | "createdAt" | "updatedAt">;

type FindBrandVoiceDto = {
    id?: string;
    userId: string;
};

type DeleteBrandVoiceDto = {
    id: string;
};


type LastUpdatedBrandVoicesDto = {
    userId: string;
    limit: number;
};

export type { CreateBrandVoiceDto, UpdateBrandVoiceDto, FindBrandVoiceDto, DeleteBrandVoiceDto, LastUpdatedBrandVoicesDto };
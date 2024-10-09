import BrandVoiceService from "../../../domain/services/brand-voice.service";
import BrandVoice from "../../../domain/entities/brand-voice.entity";
import { GetBrandVoiceDto } from "../../dto/brand-voice/get.dto";
import { GetBrandVoiceSchema } from "../../dto/brand-voice/get.dto";

export class GetBrandVoiceUseCase {
    constructor(private brandVoiceService: BrandVoiceService) { }



    async execute({ id, userId }: GetBrandVoiceDto): Promise<BrandVoice[]> {
        const validationResult = GetBrandVoiceSchema.safeParse({ id, userId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }
        return await this.brandVoiceService.get({ id, userId });
    }
}


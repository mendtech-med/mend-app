import BrandVoiceService from "../../../domain/services/brand-voice.service";
import BrandVoice from "../../../domain/entities/brand-voice.entity";
import { UpdateBrandVoiceDto, UpdateBrandVoiceSchema } from "../../dto/brand-voice/update.dto";

export class UpdateBrandVoiceUseCase {
    constructor(private brandVoiceService: BrandVoiceService) { }

    async execute(brandVoice: UpdateBrandVoiceDto): Promise<BrandVoice> {

        const validationResult = UpdateBrandVoiceSchema.safeParse(brandVoice);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.brandVoiceService.update(validationResult.data);
    }
}


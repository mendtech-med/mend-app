import BrandVoiceService from "../../../domain/services/brand-voice.service";
import BrandVoice from "../../../domain/entities/brand-voice.entity";
import { CreateBrandVoiceDto, CreateBrandVoiceSchema } from "../../dto/brand-voice/create.dto";

export class CreateBrandVoiceUseCase {
    constructor(private brandVoiceService: BrandVoiceService) { }

    async execute(brandVoice: CreateBrandVoiceDto): Promise<BrandVoice> {

        const validationResult = CreateBrandVoiceSchema.safeParse(brandVoice);

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.brandVoiceService.create(validationResult.data);
    }
}


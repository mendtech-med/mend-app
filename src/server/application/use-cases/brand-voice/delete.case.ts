import BrandVoiceService from "../../../domain/services/brand-voice.service";
import BrandVoice from "../../../domain/entities/brand-voice.entity";
import { DeleteBrandVoiceDto, DeleteBrandVoiceSchema } from "../../dto/brand-voice/delete.dto";

export class DeleteBrandVoiceUseCase {
    constructor(private brandVoiceService: BrandVoiceService) { }

    async execute({ id , ownerId }: DeleteBrandVoiceDto): Promise<BrandVoice> {

        const validationResult = DeleteBrandVoiceSchema.safeParse({ id , ownerId });

        if (!validationResult.success) {
            throw new Error(JSON.stringify(validationResult.error));
        }

        return await this.brandVoiceService.delete(validationResult.data);
    }
}


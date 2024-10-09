import { CreateBrandVoiceDto } from "../../application/dto/brand-voice/create.dto";
import { GetBrandVoiceDto } from "../../application/dto/brand-voice/get.dto";
import { UpdateBrandVoiceDto } from "../../application/dto/brand-voice/update.dto";
import { DeleteBrandVoiceDto } from "../../application/dto/brand-voice/delete.dto";

import BrandVoice from "../entities/brand-voice.entity";
import { IBrandVoiceRepository } from "../repositories/brand-voice.interface";

class BrandVoiceService {
    constructor(private brandVoiceRepository: IBrandVoiceRepository) { }

    async create(brandVoice: CreateBrandVoiceDto): Promise<BrandVoice> {
        return await this.brandVoiceRepository.create({
            name: brandVoice.name,
            tone: brandVoice.tone,
            personality: brandVoice.personality,
            languageStyle: brandVoice.languageStyle,
            pointOfView: brandVoice.pointOfView,
            consistency: brandVoice.consistency,
            clarity: brandVoice.clarity,
            distinctiveness: brandVoice.distinctiveness,
            audienceFocused: brandVoice.audienceFocused,
            accessibility: brandVoice.accessibility,
            adaptability: brandVoice.adaptability,
            ownerId: brandVoice.ownerId
        });
    }


    async update(brandVoice: UpdateBrandVoiceDto): Promise<BrandVoice> {

        // check if brandVoice exists
        const brandVoiceExists = await this.brandVoiceRepository.brandVoiceExists(brandVoice.id);
        if (!brandVoiceExists) {
            throw new Error("BrandVoice does not exist");
        }

        // check if brandVoice belongs to owner
        const brandVoiceBelongsToOwner = await this.brandVoiceRepository.brandVoiceBelongsToOwner(brandVoice.id, brandVoice.ownerId);

        if (!brandVoiceBelongsToOwner) {
            throw new Error("BrandVoice does not belong to owner");
        }

        return await this.brandVoiceRepository.update({
            id: brandVoice.id,
            name: brandVoice.name,
            tone: brandVoice.tone,
            personality: brandVoice.personality,
            languageStyle: brandVoice.languageStyle,
            pointOfView: brandVoice.pointOfView,
            consistency: brandVoice.consistency,
            clarity: brandVoice.clarity,
            distinctiveness: brandVoice.distinctiveness,
            audienceFocused: brandVoice.audienceFocused,
            accessibility: brandVoice.accessibility,
            adaptability: brandVoice.adaptability
        });
    }

    async get({ id, userId }: GetBrandVoiceDto): Promise<BrandVoice[]> {

        // check if brandVoice exists
        const belongsToOwner = id ? await this.brandVoiceRepository.brandVoiceBelongsToOwner(id, userId) : true;

        if (!belongsToOwner) {
            throw new Error("BrandVoice does not belong to owner");
        }

        return await this.brandVoiceRepository.find({ id, userId });
    }

    async delete({ id, ownerId }: DeleteBrandVoiceDto): Promise<BrandVoice> {
        // check if brandVoice exists
        const brandVoiceExists = await this.brandVoiceRepository.brandVoiceExists(id);
        if (!brandVoiceExists) {
            throw new Error("BrandVoice does not exist");
        }

        // check if brandVoice has resources
        const belongsToOwner = await this.brandVoiceRepository.brandVoiceBelongsToOwner(id, ownerId);
        if (!belongsToOwner) {
            throw new Error("BrandVoice does not belong to owner");
        }
        return await this.brandVoiceRepository.delete({ id });
    }
}

export default BrandVoiceService;
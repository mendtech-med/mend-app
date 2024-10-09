import BrandVoice from "../entities/brand-voice.entity";
import User from "../entities/user.entity";
import { CreateBrandVoiceDto, DeleteBrandVoiceDto, FindBrandVoiceDto, UpdateBrandVoiceDto, LastUpdatedBrandVoicesDto } from "./brand-voice.dto";

export interface IBrandVoiceRepository {
    // crud
    find({ id }: FindBrandVoiceDto): Promise<BrandVoice[]>;
    create(brandVoice: CreateBrandVoiceDto): Promise<BrandVoice>;
    update(brandVoice: UpdateBrandVoiceDto): Promise<BrandVoice>;
    delete({ id }: DeleteBrandVoiceDto): Promise<BrandVoice>;
    // checkers
    brandVoiceExists(id: BrandVoice["id"]): Promise<boolean>;
    brandVoiceBelongsToOwner(brandVoiceId: BrandVoice["id"], ownerId: User["clerkId"]): Promise<boolean>;
    ownerBrandVoicesCount(ownerId: User["id"]): Promise<number>;
}

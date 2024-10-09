import BrandVoice from "../domain/entities/brand-voice.entity";
import { CreateBrandVoiceDto, FindBrandVoiceDto, UpdateBrandVoiceDto, DeleteBrandVoiceDto, LastUpdatedBrandVoicesDto } from "../domain/repositories/brand-voice.dto";
import { IBrandVoiceRepository } from "../domain/repositories/brand-voice.interface";
import prisma from "../infrastructure/database/prisma.infra";

class BrandVoiceRepository implements IBrandVoiceRepository {
    async create(brandVoice: CreateBrandVoiceDto): Promise<BrandVoice> {
        const createdBrandVoice = await prisma.audienceBrandVoice.create({
            data: {
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
                user: {
                    connect: {
                        clerkId: brandVoice.ownerId
                    }
                },
            },
        });
        return {
            id: createdBrandVoice.id,
            name: createdBrandVoice.name,
            tone: createdBrandVoice.tone,
            personality: createdBrandVoice.personality,
            languageStyle: createdBrandVoice.languageStyle,
            pointOfView: createdBrandVoice.pointOfView,
            consistency: createdBrandVoice.consistency,
            clarity: createdBrandVoice.clarity,
            distinctiveness: createdBrandVoice.distinctiveness,
            audienceFocused: createdBrandVoice.audienceFocused,
            accessibility: createdBrandVoice.accessibility,
            adaptability: createdBrandVoice.adaptability,
            ownerId: createdBrandVoice.userId,
        } as BrandVoice;
    }

    async update(brandVoice: UpdateBrandVoiceDto): Promise<BrandVoice> {

        const foundBrandVoice = await prisma.audienceBrandVoice.findUnique({
            where: {
                id: brandVoice.id
            }
        });

        if (!foundBrandVoice) {
            throw new Error("BrandVoice not found");
        }

        const updatedBrandVoice = await prisma.audienceBrandVoice.update({
            where: {
                id: brandVoice.id
            },
            data: {
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
            },
        });

        return {
            id: updatedBrandVoice.id,
            name: updatedBrandVoice.name,
            tone: updatedBrandVoice.tone,
            personality: updatedBrandVoice.personality,
            languageStyle: updatedBrandVoice.languageStyle,
            pointOfView: updatedBrandVoice.pointOfView,
            consistency: updatedBrandVoice.consistency,
            clarity: updatedBrandVoice.clarity,
            distinctiveness: updatedBrandVoice.distinctiveness,
            audienceFocused: updatedBrandVoice.audienceFocused,
            accessibility: updatedBrandVoice.accessibility,
            adaptability: updatedBrandVoice.adaptability,
            ownerId: updatedBrandVoice.userId,
        } as BrandVoice;
    };


    async find({ id, userId }: FindBrandVoiceDto): Promise<BrandVoice[]> {
        const foundBrandVoices = await prisma.audienceBrandVoice.findMany({
            where: {
                id,
                user: {
                    clerkId: userId
                }
            },
        });

        return foundBrandVoices.map(brandVoice => ({
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
            adaptability: brandVoice.adaptability,
            ownerId: brandVoice.userId,
        } as BrandVoice));
    }

    async delete({ id }: DeleteBrandVoiceDto): Promise<BrandVoice> {
        const deletedBrandVoice = await prisma.audienceBrandVoice.delete({
            where: {
                id
            },
        });
        return {
            id: deletedBrandVoice.id,
            name: deletedBrandVoice.name,
            tone: deletedBrandVoice.tone,
            personality: deletedBrandVoice.personality,
            languageStyle: deletedBrandVoice.languageStyle,
            pointOfView: deletedBrandVoice.pointOfView,
            consistency: deletedBrandVoice.consistency,
            clarity: deletedBrandVoice.clarity,
            distinctiveness: deletedBrandVoice.distinctiveness,
            audienceFocused: deletedBrandVoice.audienceFocused,
            accessibility: deletedBrandVoice.accessibility,
            adaptability: deletedBrandVoice.adaptability,
            ownerId: deletedBrandVoice.userId,
        } as BrandVoice;
    }


    // checkers 
    async brandVoiceExists(id: BrandVoice["id"]): Promise<boolean> {
        const brandVoice = await prisma.audienceBrandVoice.findUnique({
            where: {
                id
            }
        });
        return !!brandVoice;
    }

    async brandVoiceBelongsToOwner(brandVoiceId: BrandVoice["id"], ownerId: string): Promise<boolean> {
        const brandVoice = await prisma.audienceBrandVoice.findUnique({
            where: {
                id: brandVoiceId
            },
            include: {
                user: true
            }
        });

        if (!brandVoice) {
            return false;
        }

        return brandVoice.user.clerkId === ownerId;
    }

    async ownerBrandVoicesCount(ownerId: string): Promise<number> {
        return await prisma.audienceBrandVoice.count({
            where: {
                user: {
                    clerkId: ownerId
                }
            }
        });
    }

}


export default BrandVoiceRepository;
import Refer from "../domain/entities/refer.entity";
import { CreateReferDto, FindReferDto, UpdateReferDto, DeleteReferDto } from "../domain/repositories/refer.dto";
import { IReferRepository } from "../domain/repositories/refer.interface";
import prisma from "../infrastructure/database/prisma.infra";

class ReferRepository implements IReferRepository {
    async create(refer: CreateReferDto): Promise<Refer> {
        const createdRefer = await prisma.refer.create({
            data: {
                content: refer.content,
                sourceUrl: refer.sourceUrl,
                project: {
                    connect: {
                        id: refer.projectId
                    }
                }
            }
        });
        return {
            id: createdRefer.id,
            content: createdRefer.content,
            sourceUrl: createdRefer.sourceUrl,
            projectId: createdRefer.projectId,
            createdAt: createdRefer.createdAt,
            updatedAt: createdRefer.updatedAt
        } as Refer;
    }

    async update(refer: UpdateReferDto): Promise<Refer> {

        const foundRefer = await prisma.refer.findUnique({
            where: {
                id: refer.id
            }
        });

        if (!foundRefer) {
            throw new Error("Refer not found");
        }

        const updatedRefer = await prisma.refer.update({
            where: {
                id: refer.id
            },
            data: {
                content: refer.content,
                sourceUrl: refer.sourceUrl,
            },
        });

        return {
            id: updatedRefer.id,
            content: updatedRefer.content,
            sourceUrl: updatedRefer.sourceUrl,
            projectId: updatedRefer.projectId,
            createdAt: updatedRefer.createdAt,
            updatedAt: updatedRefer.updatedAt
        } as Refer;
    };


    async find({ projectId }: FindReferDto): Promise<Refer[]> {
        const foundRefers = await prisma.refer.findMany({
            where: {
                projectId
            }
        });

        return foundRefers.map(refer => ({
            id: refer.id,
            content: refer.content,
            sourceUrl: refer.sourceUrl,
            projectId: refer.projectId,
            createdAt: refer.createdAt,
            updatedAt: refer.updatedAt
        } as Refer));
    }

    async delete({ id }: DeleteReferDto): Promise<Refer> {
        const deletedRefer = await prisma.refer.delete({
            where: {
                id
            },
        });
        return {
            id: deletedRefer.id,
            content: deletedRefer.content,
            sourceUrl: deletedRefer.sourceUrl,
            projectId: deletedRefer.projectId,
            createdAt: deletedRefer.createdAt,
            updatedAt: deletedRefer.updatedAt
        } as Refer;
    }



    // checkers 
    async referExists(id: Refer["id"]): Promise<boolean> {
        const refer = await prisma.refer.findUnique({
            where: {
                id
            }
        });
        return !!refer;
    }

    async referBelongsToProject(referId: Refer["id"], projectId: string): Promise<boolean> {
        const refer = await prisma.refer.findUnique({
            where: {
                id: referId
            }
        });

        if (!refer) {
            return false;
        }

        return refer.projectId === projectId;
    }

    async projectRefersCount(projectId: string): Promise<number> {
        return await prisma.refer.count({
            where: {
                projectId
            }
        });
    }

}


export default ReferRepository;
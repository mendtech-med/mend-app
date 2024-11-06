import Reader from "../domain/entities/reader.entity";
import { CreateReaderDto, FindReaderDto, UpdateReaderDto, DeleteReaderDto } from "../domain/repositories/reader.dto";
import { IReaderRepository } from "../domain/repositories/reader.interface";
import prisma from "../infrastructure/database/prisma.infra";

class ReaderRepository implements IReaderRepository {
    async create(reader: CreateReaderDto): Promise<Reader> {
        const createdReader = await prisma.reader.create({
            data: {
                category: reader.catagory,
                type: reader.type,
                items: {
                    createMany: {
                        data: reader.items
                    }
                },
                ownerId: reader.ownerId,

            },
            include: {
                items: true,
            }
        });
        return {
            catagory: createdReader.category,
            type: createdReader.type,
            items: createdReader.items,
            createdAt: createdReader.createdAt,
            updatedAt: createdReader.updatedAt,
            id: createdReader.id
        } as Reader;
    }




    async find({ id, ownerId }: FindReaderDto): Promise<Reader[]> {
        const foundReaders = await prisma.reader.findMany({
            where: {
                ownerId,
                id
            },
            include: {
                items: true
            }
        });

        return foundReaders.map(reader => ({
            id: reader.id,
            catagory: reader.category,
            type: reader.type,
            items: reader.items,
            createdAt: reader.createdAt,
            updatedAt: reader.updatedAt
        }) as Reader);
    }

    async delete({ id }: DeleteReaderDto): Promise<Reader> {
        const deletedReader = await prisma.reader.delete({
            where: {
                id
            },
            include: {
                items: true
            }
        });
        return {
            catagory: deletedReader.category,
            type: deletedReader.type,
            items: deletedReader.items,
            createdAt: deletedReader.createdAt,
            updatedAt: deletedReader.updatedAt,
            id: deletedReader.id
        } as Reader;
    }

}


export default ReaderRepository;
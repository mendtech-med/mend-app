import Reader from "../entities/reader.entity";
import { CreateReaderDto, DeleteReaderDto, FindReaderDto, UpdateReaderDto } from "./reader.dto";

export interface IReaderRepository {
    find({ id, ownerId }: FindReaderDto): Promise<Reader[]>;
    create(reader: CreateReaderDto): Promise<Reader>;
    delete({ id }: DeleteReaderDto): Promise<Reader>;
}

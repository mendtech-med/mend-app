import ReaderRepository from "@/server/repositories/reader.repository";
import Reader from "@/server/domain/entities/reader.entity";
import { CreateReaderDto, FindReaderDto, UpdateReaderDto, DeleteReaderDto } from "@/server/domain/repositories/reader.dto";


const readerRepository = new ReaderRepository();

export const createReader = async (reader: CreateReaderDto) => {
    return await readerRepository.create(reader);
}

export const getCategories = async (reader: FindReaderDto) => {
    return await readerRepository.find(reader);
}

export const deleteReader = async (reader: DeleteReaderDto) => {
    return await readerRepository.delete(reader);
}
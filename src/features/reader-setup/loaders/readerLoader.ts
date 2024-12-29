import { readerHandlers } from '../../../services/handlers/reader';

export const readerLoader = async () => {
  try {
    const readers = await readerHandlers.getAllReaders();
    return readers;
  } catch (error) {
    console.log(error);
    return null;
  }
};

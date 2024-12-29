import axiosInstance from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';
import { IContentClassification, IContentCreate } from '../api/types';

export const readerHandlers = {
  getAllReaders: async () => {
    const response = await axiosInstance.get(ENDPOINTS.READER.GET_ALL);
    return response.data;
  },

  createReader: async (data: IContentCreate) => {
    const response = await axiosInstance.post(ENDPOINTS.READER.CREATE, data);
    return response.data;
  },

  updateReader: async (id: string, data: IContentClassification) => {
    const response = await axiosInstance.put(ENDPOINTS.READER.UPDATE(id), data);
    return response.data;
  },

  deleteReader: async (id: string) => {
    const response = await axiosInstance.post(ENDPOINTS.READER.DELETE(id));
    return response.data;
  },
};

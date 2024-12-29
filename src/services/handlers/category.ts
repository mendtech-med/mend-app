import axiosInstance from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';
import { IContentClassification, IContentCreate } from '../api/types';

export const categoryHandlers = {
  getAllCategories: async () => {
    const response = await axiosInstance.get(ENDPOINTS.CATEGORY.GET_ALL);
    return response.data;
  },

  createCategory: async (data: IContentCreate) => {
    const response = await axiosInstance.post(ENDPOINTS.CATEGORY.CREATE, data);
    return response.data;
  },

  updateCategory: async (id: string, data: IContentClassification) => {
    const response = await axiosInstance.put(
      ENDPOINTS.CATEGORY.UPDATE(id),
      data
    );
    return response.data;
  },

  deleteCategory: async (id: string) => {
    const response = await axiosInstance.post(ENDPOINTS.CATEGORY.DELETE(id));
    return response.data;
  },
};

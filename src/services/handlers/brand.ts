import axiosInstance from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';
import { IBrandCreate } from '../api/types';

export const brandHandlers = {
  getAllBrands: async () => {
    const response = await axiosInstance.get(ENDPOINTS.BRAND.GET_ALL);
    return response.data;
  },

  createBrand: async (data: IBrandCreate) => {
    const response = await axiosInstance.post(ENDPOINTS.BRAND.CREATE, data);
    return response.data;
  },

  updateBrand: async (id: string, data: IBrandCreate) => {
    const response = await axiosInstance.put(ENDPOINTS.BRAND.UPDATE(id), data);
    return response.data;
  },

  deleteBrand: async (id: string) => {
    const response = await axiosInstance.post(ENDPOINTS.BRAND.DELETE(id));
    return response.data;
  },
};

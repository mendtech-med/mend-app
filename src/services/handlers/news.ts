import { AxiosResponse } from 'axios';
import axiosInstance from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';
import { INews, INewsCreate } from '../api/types';

export const newsHandlers = {
  getAllNews: async () => {
    const response = await axiosInstance.get(ENDPOINTS.NEWS.GET_ALL);
    return response.data;
  },

  createNews: async (data: INewsCreate): Promise<AxiosResponse<INews>> => {
    const response = await axiosInstance.post(ENDPOINTS.NEWS.CREATE, {
      ...data,
    });
    return response.data;
  },

  showNews: async (id: string) => {
    const response = await axiosInstance.get(ENDPOINTS.NEWS.GET(id));
    return response.data;
  },

  updateNews: async (data: INews) => {
    const response = await axiosInstance.put(ENDPOINTS.NEWS.UPDATE, {
      ...data,
    });
    return response.data;
  },

  deleteNews: async (id: string) => {
    const response = await axiosInstance.post(ENDPOINTS.NEWS.DELETE(id));
    return response.data;
  },

  // SS : simple news generation
  generateNews: async (data: INews) => {
    const response = await axiosInstance.post(ENDPOINTS.NEWS.GENERATE, {
      ...data,
    },
    {
      timeout: 100000,
    });
    return response.data;
  },

  
  findSelectedText: async (payload: any) => {
    const response = await axiosInstance.post(ENDPOINTS.NEWS.FIND, {
      ...payload,
    });
    return response.data;
  },
  
  referSelectedText: async (payload: any) => {
    const response = await axiosInstance.post(ENDPOINTS.NEWS.REFER, {
      ...payload,
    });
    return response.data;
  },
};

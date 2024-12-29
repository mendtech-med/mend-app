import axiosInstance from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';
import {
  ISignUpData,
  ILoginData,
  IConfirmRegistrationData,
  ISignOut,
  IResendConfirmRegistrationData,
} from '../api/types';

export const authHandlers = {
  signUp: async (data: ISignUpData) => {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.SIGN_UP, data);
    return response.data;
  },

  confirmRegistration: async (data: IConfirmRegistrationData) => {
    const response = await axiosInstance.post(
      ENDPOINTS.AUTH.CONFIRM_REGISTRATION,
      data
    );
    return response.data;
  },

  resendConfirmationCode: async (data: IResendConfirmRegistrationData) => {
    const response = await axiosInstance.post(
      ENDPOINTS.AUTH.RESEND_CONFIRM_REGISTRATION,
      data
    );
    return response.data;
  },

  login: async (data: ILoginData) => {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
  },

  logout: async (data: ISignOut) => {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGOUT, data);
    return response.data;
  },

  refreshToken: async () => {
    const response = await axiosInstance.post(ENDPOINTS.AUTH.REFRESH_TOKEN);
    return response.data;
  },
};

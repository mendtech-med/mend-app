import axios from 'axios';

// export const baseURL = 'https://x283426ve3.execute-api.us-east-1.amazonaws.com';
export const baseURL = 'http://localhost:8001';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("ERROR", error);

    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("RES: ERROR", error.code);
    if (['ERR_NETWORK'].includes(error.code)) {
      location.href = '/no-internet-connection'
      return;
    }

    // Handle common errors (401, 403, etc.)
    if (error.response?.status === 401) {
      const token = localStorage.getItem('access_token');
      if(token){
        location.href = '/login'
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

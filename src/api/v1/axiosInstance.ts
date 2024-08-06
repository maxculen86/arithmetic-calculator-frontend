import axios from 'axios';
import { API_BASE_URL } from './config';
import { getAuthToken } from '../../utils/auth';

/**
 * Axios instance for making HTTP requests.
 */
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;

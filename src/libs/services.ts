import axios from 'axios'
import { retrieve, seal } from '@/libs/vault'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WABA_API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `Bearer ${retrieve('token')}`
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        seal()
        break
      default:
        return Promise.reject(error);
    }
  }
);

export { axiosInstance as axios }

import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    const auth = localStorage.getItem('user')
    if (auth && config?.headers) {
      const { token } = JSON.parse(auth)

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    return config;
  }
});

export default api;
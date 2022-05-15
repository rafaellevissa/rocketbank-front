import axios, { AxiosRequestConfig } from "axios";
import { store } from "../store";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  try {
    const storage = store.getState();
    const auth = storage?.auth?.item;

    if (auth && config?.headers) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  } catch (error) {
    return config;
  }
});

export default api;
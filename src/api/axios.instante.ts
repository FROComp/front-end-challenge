import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
const language = import.meta.env.VITE_API_LANGUAGE;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language,
  },
});

export type { AxiosResponse };
export default instance;

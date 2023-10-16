import axios, { AxiosError, AxiosResponse } from "axios";

export const apiServiceInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

// this skips the full axios response to send just the data body to the api services
apiServiceInstance.interceptors.response.use(
  <T>(res: AxiosResponse<T>) => {
    return res.data;
  },
  (err: AxiosError) => {
    throw err.stack || err.message;
  }
);

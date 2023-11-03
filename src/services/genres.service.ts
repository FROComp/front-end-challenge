import axios, { AxiosResponse } from "api/axios.instante";

export const getGenrersService = (): Promise<AxiosResponse<any>> =>
  axios.get("/genre/movie/list");

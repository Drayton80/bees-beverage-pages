import axios, { AxiosResponse } from "axios";
import { BreweryInfo } from "./types";

const getById = (id: number): Promise<AxiosResponse<BreweryInfo>> =>
  axios.get(`https://api.openbrewerydb.org/breweries/${id}`);

const getAll = (): Promise<AxiosResponse<BreweryInfo[]>> =>
  axios.get(`https://api.openbrewerydb.org/breweries`);

export default {
  getById,
  getAll,
};

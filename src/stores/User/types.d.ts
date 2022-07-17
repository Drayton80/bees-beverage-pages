import { BreweryInfo } from "../../services/Breweries/types";

export interface User {
  name: string;
  breweries: BreweryInfo[];
}

export interface UserStore {
  user: User;
  set: (user: User) => void;
  setName: (name: string) => void;
  setBreweries: (breweries: BreweryInfo[]) => void;
}

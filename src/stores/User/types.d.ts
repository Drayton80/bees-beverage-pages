import { BreweryInfo } from "../../services/Breweries/types";

export type BreweryWithCustomTag = BreweryInfo & { customTags: string[] };

export interface User {
  name: string;
  breweries: BreweryWithCustomTag[];
}

export interface UserStore {
  user: User;
  set: (user: User) => void;
  setName: (state: User, name: string) => void;
  setBreweries: (state: User, breweries: BreweryInfo[]) => void;
  deleteBrewery: (state: User, breweryId: string) => void;
  pushCustomTag: (state: User, breweryId: string, tag: string) => void;
  editCustomTag: (
    state: User,
    breweryId: string,
    tagIndex: number,
    tagNewText: string
  ) => void;
}
